import { Router , Request ,Response } from "express";
import api from '../controllers/controllers'
import multer from 'multer'
import path from 'path'

const routes = Router()

routes.route('/sellers')
.get( api.getSellers)


routes.route('/transactions/:sellerId/:date')
.get( api.getAllTransactions)


routes.route('/transactions/:sellerId')
.get( api.getSellerTransaction)

//! Use of Multer
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './src/images/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
 
var upload = multer({
    storage: storage
});

routes.route('/post')
.post(upload.single('image'),api.post)



export default routes
