"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_config_1 = __importDefault(require("../database/database_config"));
const drawTables = () => {
    return database_config_1.default.sync({ alter: true }).then((result) => {
        console.log('loggED ');
        // seqConnection.close()
    }).catch((err) => {
        console.log('err', err);
    });
};
//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });
// const db = {};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
exports.default = drawTables;
