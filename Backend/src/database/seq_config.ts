
var db = {};
import config from '../config';
let Sequelize = require('sequelize');
import database from '../database/database_config';
import fs from 'fs';
import path from 'path';

const sequelize = new Sequelize(config.database, config.user, config.password, {
	host: config.host,
	dialect: 'mysql',
	operatorsAliases: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
	logging: false,
	define: {
		timestamps: false
	}
});

const modelsPath = path.join(__dirname, 'Models');

export default sequelize
