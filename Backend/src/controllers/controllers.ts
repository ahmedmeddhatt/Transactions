import {Request, Response ,NextFunction } from "express";
import sellerModel from "../models/seller_model";
import transactionModel from "../models/transaction_model";
import seqConnection from '../database/database_config'
import  Sequelize  from 'sequelize';
import sequelize from "../database/seq_config";
import path from 'path'

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

const post = async (req:Request, res:Response, next: NextFunction) => {
    
    // const oneSeller = req.params.sellerId;
try {
   await seqConnection.authenticate()
    if(!req.file){
    res.status(404).json({message: 'No Image Found !!'})
    }else{

    var imgsrc = path.join(__dirname + req.file.filename );
    const data =  `insert into transaction values(27,'title', current_date(),'image',500,6);`
    
    await seqConnection.query( data);

    res.status(200).json({ status: 'success' ,Result: data.length , data , message:`User Reviewed successfully`})
}


} catch (error) {
    console.log(error);
    
    res.status(404).json({ message: "Catch err", error })
}


}




















const getSellers = async (req:Request, res:Response, next: NextFunction) => {
    const oneSeller = req.params.sellerId;

try {
   await seqConnection.authenticate()
    const data =  await seqConnection.query( `SELECT * FROM Seller `, {
    model: transactionModel,
    mapToModel: true // pass true here if you have any mapped fields
  });
  res.status(200).json({ status: 'success' ,Result: data.length , data , message:`User Reviewed successfully`})


} catch (error) {
    console.log(error);
    
    res.status(404).json({ message: "Catch err", error })
}


}


const getSellerTransaction = async (req:Request, res:Response, next: NextFunction) => {
        const oneSeller = req.params.sellerId;

    try {
       await seqConnection.authenticate()
        const data =  await seqConnection.query( `SELECT *
     FROM Seller JOIN Transaction ON Seller.Id = sellerId and Seller.id=${oneSeller} ;`, {
        model: transactionModel,
        mapToModel: true // pass true here if you have any mapped fields
      });
      res.status(200).json({ status: 'success' , data , message:`User Reviewed successfully`})

    
    } catch (error) {
        console.log(error);
        
        res.status(404).json({ message: "Catch err", error })
    }


}



const getAllTransactions = async (req:Request, res:Response, next: NextFunction) => {

    
    const oneSeller = req.params.sellerId;
    const date = req.params.date
    const token = req.headers.token
    if(!token){
        res.status(403).json({ message: "Token Not Found !!" })
        return
    }
    if(token !== 'ABC'){
        res.status(403).json({ message: "Wrong Token !!" })
        return
    }

try {
   await seqConnection.authenticate()
    const data =  await seqConnection.query( `SELECT Seller.name,Seller.id,Sum(Transaction.price) as Total_income,
    Transaction.last_updated as Date FROM Seller JOIN Transaction on 
    Seller.id=Transaction.SellerId and Seller.id=${oneSeller} and Transaction.last_updated='${date} '
     group by Seller.name ;
    `, {
    model: transactionModel,
    mapToModel: true // pass true here if you have any mapped fields
  });
  res.status(200).json({ status: 'success' , data , message:`User Reviewed successfully`})


} catch (error) {
    console.log(error);
    
    res.status(404).json({ message: "Catch err", error })
}


}


export default{
    
    getSellerTransaction ,
    getSellers ,
    getAllTransactions ,
    post
    
}



























