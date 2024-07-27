const { Place, Image } = require('../data'); // Ajusta la ruta según la ubicación de tu modelo
const actividades = require('../dataMokeada/actividades'); // Ajusta la ruta según la ubicación de tu archivo de datos

async function loadPlaces() {
  try {
    // Comienza la transacción
    await Place.sequelize.transaction(async (transaction) => {
      // Itera sobre cada actividad en el array y créalas en la base de datos si no existen
      for (const actividad of actividades) {
        // Verifica si el lugar ya existe basado en el nombre
        const existingPlace = await Place.findOne({
          where: {
            nombre: actividad.nombre,
          },
          transaction,
        });

        if (!existingPlace) {
          // Crea el lugar y obtiene el lugar creado
          const place = await Place.create({
            nombre: actividad.nombre,
            ubicacion: actividad.ubicacion,
            descripcion: actividad.descripcion, // Ajusta según tus necesidades
            valoracion: Math.round(actividad.estrellas), // Redondea la valoración
            tipo: actividad.tipo, // Ajusta el tipo según tus necesidades
            n_document: '30772620', // Asigna un valor predeterminado o ajusta según tu lógica
          }, { transaction });

          // Crea el registro de Image y lo asocia con el Place
          if (actividad.imagen) {
            await Image.create({
              url: actividad.imagen,
              placeId: place.placeId, // Asocia la imagen con el Place recién creado
            }, { transaction });
          }
        }
      }
    });

    console.log('Actividades cargadas correctamente');
  } catch (error) {
    console.error('Error al cargar datos:', error);
  }
}

module.exports = loadPlaces;