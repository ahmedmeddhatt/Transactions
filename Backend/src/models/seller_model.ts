import seqConnection from "../database/database_config";
import { DataTypes , Sequelize} from "sequelize";


const sellerModel = seqConnection.define('Seller', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    name: {
        type: DataTypes.STRING(500) ,
        allowNull: false 

    }
})



export default sellerModel
