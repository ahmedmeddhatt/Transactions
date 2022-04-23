"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers/controllers"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const routes = (0, express_1.Router)();
routes.route('/sellers')
    .get(controllers_1.default.getSellers);
routes.route('/transactions/:sellerId/:date')
    .get(controllers_1.default.getAllTransactions);
routes.route('/transactions/:sellerId')
    .get(controllers_1.default.getSellerTransaction);
//! Use of Multer
var storage = multer_1.default.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './src/images/'); // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path_1.default.extname(file.originalname));
    }
});
var upload = (0, multer_1.default)({
    storage: storage
});
routes.route('/post')
    .post(upload.single('image'), controllers_1.default.post);
exports.default = routes;
