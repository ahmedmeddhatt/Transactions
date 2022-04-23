"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_model_1 = __importDefault(require("../models/transaction_model"));
const database_config_1 = __importDefault(require("../database/database_config"));
const path_1 = __importDefault(require("path"));
// //! Use of Multer
// var storage = multer.diskStorage({
//     destination: (req, file, callBack) => {
//         callBack(null, './src/images/')     // './public/images/' directory name where save the file
//     },
//     filename: (req, file, callBack) => {
//         callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// })
// var upload = multer({
//     storage: storage
// });
const post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // const oneSeller = req.params.sellerId;
    try {
        yield database_config_1.default.authenticate();
        if (!req.file) {
            res.status(404).json({ message: 'No Image Found !!' });
        }
        else {
            var imgsrc = path_1.default.join(__dirname + req.file.filename);
            const data = `insert into transaction values(27,'title', current_date(),'image',500,6);`;
            yield database_config_1.default.query(data);
            res.status(200).json({ status: 'success', Result: data.length, data, message: `User Reviewed successfully` });
        }
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ message: "Catch err", error });
    }
});
const getSellers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const oneSeller = req.params.sellerId;
    try {
        yield database_config_1.default.authenticate();
        const data = yield database_config_1.default.query(`SELECT * FROM Seller `, {
            model: transaction_model_1.default,
            mapToModel: true // pass true here if you have any mapped fields
        });
        res.status(200).json({ status: 'success', Result: data.length, data, message: `User Reviewed successfully` });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ message: "Catch err", error });
    }
});
const getSellerTransaction = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const oneSeller = req.params.sellerId;
    try {
        yield database_config_1.default.authenticate();
        const data = yield database_config_1.default.query(`SELECT *
     FROM Seller JOIN Transaction ON Seller.Id = sellerId and Seller.id=${oneSeller} ;`, {
            model: transaction_model_1.default,
            mapToModel: true // pass true here if you have any mapped fields
        });
        res.status(200).json({ status: 'success', data, message: `User Reviewed successfully` });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ message: "Catch err", error });
    }
});
const getAllTransactions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const oneSeller = req.params.sellerId;
    const date = req.params.date;
    const token = req.headers.token;
    if (!token) {
        res.status(403).json({ message: "Token Not Found !!" });
        return;
    }
    if (token !== 'ABC') {
        res.status(403).json({ message: "Wrong Token !!" });
        return;
    }
    try {
        yield database_config_1.default.authenticate();
        const data = yield database_config_1.default.query(`SELECT Seller.name,Seller.id,Sum(Transaction.price) as Total_income,
    Transaction.last_updated as Date FROM Seller JOIN Transaction on 
    Seller.id=Transaction.SellerId and Seller.id=${oneSeller} and Transaction.last_updated='${date} '
     group by Seller.name ;
    `, {
            model: transaction_model_1.default,
            mapToModel: true // pass true here if you have any mapped fields
        });
        res.status(200).json({ status: 'success', data, message: `User Reviewed successfully` });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ message: "Catch err", error });
    }
});
exports.default = {
    getSellerTransaction,
    getSellers,
    getAllTransactions,
    post
};
