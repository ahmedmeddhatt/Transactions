import seqConnection from "../database/database_config";
import { DataTypes , Sequelize, Transaction} from "sequelize";
import sellerModel from "./seller_model";



export interface transactionInterface {
    id: string;
    name: string;
    email: string;
    password: string;
  }

const transactionModel = seqConnection.define('Transaction', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    title: {
        type: DataTypes.STRING(500) ,
        allowNull: false ,
    },
    last_updated: {
        type: DataTypes.DATE() ,
        defaultValue:  Sequelize.fn('NOW')
    } ,
    image: {
        type : DataTypes.BLOB
    },
    price : {
        type : DataTypes.INTEGER
    } ,
    // sellerId: {
    //     type: DataTypes.INTEGER ,
    //     references: {
    //         model: 'sellers', 
    //         key: 'id',
    //      }
    // }
})

sellerModel.hasMany(transactionModel); // Set one to many relationship




export default transactionModel