const {Sequelize} = require('sequelize')

const sequelize = new Sequelize ('pwl', 'root', '',{
    dialect:'mysql',
    host: 'localhost'
})

module.exports = sequelize