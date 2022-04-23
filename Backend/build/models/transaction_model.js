"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_config_1 = __importDefault(require("../database/database_config"));
const sequelize_1 = require("sequelize");
const seller_model_1 = __importDefault(require("./seller_model"));
const transactionModel = database_config_1.default.define('Transaction', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    title: {
        type: sequelize_1.DataTypes.STRING(500),
        allowNull: false,
    },
    last_updated: {
        type: sequelize_1.DataTypes.DATE(),
        defaultValue: sequelize_1.Sequelize.fn('NOW')
    },
    image: {
        type: sequelize_1.DataTypes.BLOB
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER
    },
    // sellerId: {
    //     type: DataTypes.INTEGER ,
    //     references: {
    //         model: 'sellers', 
    //         key: 'id',
    //      }
    // }
});
seller_model_1.default.hasMany(transactionModel); // Set one to many relationship
exports.default = transactionModel;
