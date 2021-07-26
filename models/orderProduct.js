const { Sequelize } = require('sequelize');
//const { sequelize } = require('sequelize/lib/model');
const db = require('../db/database');

const OrderProduct = db.define('order_product', {
  productId:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  orderId:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  product_quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
});

module.exports = OrderProduct;