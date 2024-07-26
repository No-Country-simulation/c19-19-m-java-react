const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Rating = sequelize.define('Rating', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    placeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    n_document: { // Reemplazar userId con n_document
        type: DataTypes.STRING,
        allowNull: false,
      },
  });

  return Rating;
};