import dotenv from 'dotenv'

dotenv.config()


const {
         PORT,
      ENV ,
      DB_HOST ,
      DB ,
      DB_USER  ,
      DB_PASSWORD 
    

} = process.env;

export default {
    port : PORT ,
    host : DB_HOST ,
    database : DB ,
    user : DB_USER ,
    password : DB_PASSWORD ,
    env :ENV
};