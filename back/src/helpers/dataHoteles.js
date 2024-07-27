const { Place, Image } = require('../data'); // Ajusta la ruta según la ubicación de tu modelo
const hoteles = require('../dataMokeada/hoteles'); // Ajusta la ruta según la ubicación de tu archivo de datos



async function dataHoteles() {
    try {
      // Comienza la transacción
      await Place.sequelize.transaction(async (transaction) => {
        // Itera sobre cada hotel en el array y créalas en la base de datos
        for (const hotel of hoteles) {
          const existingPlace = await Place.findOne({
            where: {
              nombre: hotel.nombre,
            },
            transaction,
          });
          if (!existingPlace) {
          // Crea el lugar y obtiene el lugar creado
          const place = await Place.create({
            nombre: hotel.nombre,
            ubicacion: hotel.ubicacion,
            descripcion: hotel.descripcion, // Ajusta según tus necesidades
            valoracion: Math.round(hotel.estrellas), // Redondea la valoración
            tipo: hotel.tipo, // Ajusta el tipo según tus necesidades
            n_document: '30772620', // Asigna un valor predeterminado o ajusta según tu lógica
          }, { transaction });
          
          // Crea el registro de Image y lo asocia con el Place
          if (hotel.imagen) {
            await Image.create({
              url: hotel.imagen,
              placeId: place.placeId, // Asocia la imagen con el Place recién creado
            }, { transaction });
          }
        }
      }
      });
  
      console.log('Hoteles cargados correctamente');
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  }
  
  module.exports = dataHoteles;