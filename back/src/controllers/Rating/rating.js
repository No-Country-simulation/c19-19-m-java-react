const { Rating, Place } = require('../../data');
const response = require('../../utils/response');

module.exports = async (req, res) => {
  try {
    const { rating, placeId } = req.body;
    const n_document = req.user?.n_document; // Usar 'n_document'

    console.log('Authenticated User:', req.user); 
    console.log('n_document:', n_document);
    console.log('Request Body:', req.body); 

    if (!rating || !placeId) {
      return response(res, 400, { error: 'Missing required fields' });
    }

    if (!n_document) {
      return response(res, 400, { error: 'n_document is required' });
    }

    const place = await Place.findByPk(placeId);
    if (!place) {
      return response(res, 404, { error: 'Place not found' });
    }

     // Crear la nueva calificación
     await Rating.create({
        rating,
        placeId,
        n_document,
      });
  
      // Obtener todas las calificaciones para el lugar
      const ratings = await Rating.findAll({ where: { placeId } });
  
      // Calcular el promedio de las calificaciones
      const averageRating = ratings.reduce((sum, rate) => sum + rate.rating, 0) / ratings.length;
  
      // Actualizar el lugar con la nueva valoración promedio
      await Place.update(
        { valoracion: Math.round(averageRating) }, // Redondear el promedio a un valor entero
        { where: { placeId } }
      );
  
      response(res, 201, { message: 'Rating created and place updated successfully' });
    } catch (error) {
      console.error('Error creating rating:', error);
      response(res, 500, 'Error al crear la calificación');
    }
  };


