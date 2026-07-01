const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('products_page', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;