const { Comment, Place, User } = require("../../data");
const response = require("../../utils/response");

module.exports = async (req, res) => {
  try {
    const { text, placeId } = req.body;
    const n_document = req.user?.n_document; // Asegúrate de obtener el userId del token

    if (!text || !placeId) {
      return response(res, 400, { error: "Missing required fields" });
    }
    if (!n_document) {
      return response(res, 400, { error: 'n_document is required' });
    }
    // Verificar si el lugar existe
    const place = await Place.findByPk(placeId);
    if (!place) {
      return response(res, 404, { error: "Place not found" });
    }

    // Crear el comentario
    const newComment = await Comment.create({
      text,
      placeId,
      n_document,
    });

    response(res, 201, { message: "Comment created successfully", data: newComment });
  } catch (error) {
    console.error(error);
    response(res, 500, "Error al crear el comentario");
  }
};
