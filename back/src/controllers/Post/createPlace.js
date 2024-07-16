const { Place, Image } = require('../../data');
const response = require('../../utils/response');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../../utils/cloudinaryConfig');

// Configuración de Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'NoCountry',
    transformation: [
      { width: 300, height: 300, crop: 'scale' } // Ajustar el tamaño según tus necesidades
    ],
    format: async (req, file) => 'png', // o 'jpeg', 'jpg', etc.
    public_id: (req, file) => `${Date.now()}_${file.originalname.split('.')[0]}`, // Mantener el nombre original del archivo
  },
});

const upload = multer({ storage: storage });

module.exports = async (req, res) => {
  upload.array('images')(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      console.error('Multer error:', err);
      return response(res, 400, { error: 'Error uploading files.' });
    } else if (err) {
      console.error('Unknown error:', err);
      return response(res, 400, { error: err.message });
    }

    try {
      // Registro para verificar el contenido de req.body
      console.log('Request body:', req.body);

      // Limpiar los nombres de los campos
      const cleanedBody = {};
      for (let key in req.body) {
        cleanedBody[key.trim()] = req.body[key].trim();
      }

      const { nombre, descripcion, valoracion, ubicacion, tipo } = cleanedBody;

      // Verificar que los campos requeridos no estén vacíos
      if (!nombre || !descripcion || !valoracion || !ubicacion || !tipo) {
        return response(res, 400, { error: 'Missing required fields' });
      }

      const images = req.files;

      // Crear el Place primero
      const place = await Place.create({
        nombre,
        descripcion,
        valoracion: parseFloat(valoracion),
        ubicacion,
        tipo,
      });

      // Si se subieron imágenes, asociarlas al Place
      if (images && images.length > 0) {
        const imagePromises = images.map(async (image) => {
          const createdImage = await Image.create({
            placeId: place.id,
            url: image.path, // Utilizar la URL de Cloudinary
          });
          return createdImage;
        });

        await Promise.all(imagePromises);
      }

      console.log('Place with images created:', place);
      return response(res, 201, { place, images: req.files });
    } catch (error) {
      console.error('Error creating Place with images:', error);
      return response(res, 500, { error: error.message });
    }
  });
};

