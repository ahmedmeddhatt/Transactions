"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PORT, ENV, DB_HOST, DB, DB_USER, DB_PASSWORD } = process.env;
exports.default = {
    port: PORT,
    host: DB_HOST,
    database: DB,
    user: DB_USER,
    password: DB_PASSWORD,
    env: ENV
};
