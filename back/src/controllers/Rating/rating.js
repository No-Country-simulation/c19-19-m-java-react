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

    const newRating = await Rating.create({
      rating,
      placeId,
      n_document, // Usar 'n_document' aquí
    });

    response(res, 201, { message: 'Rating created successfully', data: newRating });
  } catch (error) {
    console.error('Error creating rating:', error);
    response(res, 500, 'Error al crear la calificación');
  }
};


