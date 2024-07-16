const { Place, Image} = require('../../data');
const response = require('../../utils/response');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Place.findByPk(id,{
      include:{
        model: Image,
      }
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
