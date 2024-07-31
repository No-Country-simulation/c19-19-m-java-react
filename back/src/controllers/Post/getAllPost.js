const { Place, Image} = require('../../data');
const response = require('../../utils/response');
const { Op } = require('sequelize');

module.exports = async (req, res) => {
  try {
    const { search, type, ratingOrder } = req.query;

    let whereClause = {
      [Op.and]: [],
    };

    if (search) {
      whereClause[Op.and].push({
        [Op.or]: [
          { nombre: { [Op.iLike]: `%${search}%` } },
        ],
      });
    }

    if (type) {
      whereClause[Op.and].push({ tipo: type });
    }

    let orderClause = [];
    if (ratingOrder) {
      orderClause.push(['valoracion', ratingOrder]);
    }

    const places = await Place.findAll({
      where: whereClause,
      order: orderClause,
      include: [{ model: Image }],
    });

    response(res, 200, { post: places });
  } catch (error) {
    response(res, 500, { error: error.message });
  }
};

