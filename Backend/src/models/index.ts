
import { DataTypes , Model , Optional} from "sequelize";
import seqConnection from "../database/database_config";

const drawTables = ()=>{
    return seqConnection.sync({alter: true}).then((result)=>{
        console.log('loggED ' );




        
        // seqConnection.close()
        
    }).catch((err:Error)=>{
        console.log('err', err);
        
    })
}


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

export default  drawTables;