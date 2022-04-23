"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const seqConnection = new sequelize_1.Sequelize('products', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = seqConnection;
