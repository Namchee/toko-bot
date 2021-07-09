const { db } = require('./db');
const { DataTypes } = require('sequelize');

const user = db.define('User', {
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
}, {
  indexes: [
    {
      unique: true,
      fields: ['number', 'shop_name'],
    },
    {
      name: 'ux_user_number',
      using: 'BTREE',
      fields: [
        'number'
      ],
    },
  ],
});

const product = db.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['name'],
    },
  ],
});

const order = db.define('Order', {
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

product.belongsTo(user);
order.belongsTo(product);
user.hasMany(product, {
  foreignKey: 'userId',
});
product.hasMany(order, {
  foreignKey: 'productId',
});

exports.User = user;
exports.Product = product;
exports.Order = order;

