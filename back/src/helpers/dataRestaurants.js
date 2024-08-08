const { Place, Image } = require('../data'); // Ajusta la ruta según la ubicación de tu modelo
const restaurant = require('../dataMokeada/restaurant'); // Ajusta la ruta según la ubicación de tu archivo de datos



async function dataRestaurants() {
    try {
      // Comienza la transacción
      await Place.sequelize.transaction(async (transaction) => {
        // Itera sobre cada restaurants en el array y créalas en la base de datos
        for (const restaurants of restaurant) {
          const existingPlace = await Place.findOne({
            where: {
              nombre: restaurants.nombre,
            },
            transaction,
          });
  
          if (!existingPlace) {
          // Crea el lugar y obtiene el lugar creado
          const place = await Place.create({
            nombre: restaurants.nombre,
            ubicacion: restaurants.ubicacion,
            descripcion:restaurants.descripcion, // Ajusta según tus necesidades
            valoracion: Math.round(restaurants.estrellas), // Redondea la valoración
            tipo: restaurants.tipo, // Ajusta el tipo según tus necesidades
            n_document: '30772620', // Asigna un valor predeterminado o ajusta según tu lógica
          }, { transaction });
          
          // Crea el registro de Image y lo asocia con el Place
          if (restaurants.imagen) {
            await Image.create({
              url: restaurants.imagen,
              placeId: place.placeId, // Asocia la imagen con el Place recién creado
            }, { transaction });
          }
        }
      }
      });
  
      console.log('Restaurants cargados correctamente');
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  }
  
  module.exports = dataRestaurants;