const { Place } = require('../../data');
const response = require('../../utils/response');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Place.findByPk(id);

    if (!post) {
      return response(res, 404, { error: "Post not found" });
    }

    await post.destroy();
    console.log('Post deleted:', post); 
    return response(res, 200, { message: "Post deleted successfully" });
  } catch (error) {
    console.error('Error deleting post:', error); 
    return response(res, 500, { error: error.message });
  }
};

