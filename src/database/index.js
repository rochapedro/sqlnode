const Sequelize = require('sequelize');
const dbConfig = requeire('../config/database');

const connection = new Sequelize(dbConfig);

module.exports = connection;