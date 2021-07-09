const { Sequelize, DataTypes } = require('sequelize');

function defineUserModel(sequelize) {
  sequelize.define('User', {
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shop_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
}
