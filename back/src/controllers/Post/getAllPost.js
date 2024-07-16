const { Place, Image} = require('../../data');
const response = require('../../utils/response');
const { Op } = require('sequelize');

module.exports = async (req, res) => {
  try {
    const { search } = req.query;

    let post;
    let whereClause = {
      [Op.and]: [],
    };

    // Filtro por nombre 
    if (search) {
      whereClause[Op.and].push({
        [Op.or]: [
          { nombre: { [Op.iLike]: `%${search}%` } },
          
        ],
      });
    }



    
    post = await Place.findAll({
      where: whereClause,
      include: [
        { model: Image },
        
      ],
    });

    response(res, 200, {
      post: post,
    });
  } catch (error) {
    response(res, 500, { error: error.message });
  }
};



