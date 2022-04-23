"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db = {};
const config_1 = __importDefault(require("../config"));
let Sequelize = require('sequelize');
const path_1 = __importDefault(require("path"));
const sequelize = new Sequelize(config_1.default.database, config_1.default.user, config_1.default.password, {
    host: config_1.default.host,
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
const modelsPath = path_1.default.join(__dirname, 'Models');
exports.default = sequelize;
