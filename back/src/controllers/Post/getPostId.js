const { Place, Image, Comment, User} = require('../../data');
const response = require('../../utils/response');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Place.findByPk(id,{
      include: [
        {
          model: Image,
          attributes: ['id_image', 'url'] // Incluye solo los atributos que existen en el modelo Image
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['n_document', 'first_name', 'last_name', 'gender', 'email', 'phone', 'city', 'role'] // Incluye solo los atributos que existen en el modelo User
            }
          ],
          attributes: ['id', 'text', 'n_document', 'placeId'] // Incluye solo los atributos que existen en el modelo Comment
        }
      ]
    });

    if (!post) {
      return response(res, 404, { error: "Post not found" });
    }

    return response(res, 200, { post });
  } catch (error) {
    console.error('Error fetching post:', error);
    return response(res, 500, { error: error.message });
  }
};
