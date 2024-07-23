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
      const cleanedBody = {};
      for (let key in req.body) {
        cleanedBody[key.trim()] = req.body[key].trim();
      }

      const { nombre, descripcion, valoracion, ubicacion, tipo } = cleanedBody;

      if (!nombre || !descripcion || !valoracion || !ubicacion || !tipo) {
        return response(res, 400, { error: 'Missing required fields' });
      }

      const images = req.files;

      const place = await Place.create({
        nombre,
        descripcion,
        valoracion: parseFloat(valoracion),
        ubicacion,
        tipo,
      });

      if (images && images.length > 0) {
        const imagePromises = images.map((image) => {
          return Image.create({
            placeId: place.placeId, // Asegúrate de usar `place.placeId`
            url: image.path,
          });
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

