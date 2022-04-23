import express, { Application ,Request, Response} from "express";
import helmet from 'helmet'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import config from './config'
import connection from "./database/database_config";
import errorMiddleware from "./middlewares/error_middleware";
import cors from "cors";
import drawTables from "./models";
import sequelize from "./database/seq_config";
import routes from './routes/routes_index'

// import Sequelize from "sequelize";

const db = require('./models')







// create instance server
const app:Application = express()

// routes
app.use('/api',routes)
// parser incoming requests middleware
app.use(express.json())

drawTables()
// sequelize()
// http request logger middleware
app.use(morgan('common'))

// cors
// const corsOptions = {
//   origin: '*'
// };

// app.use(cors(corsOptions));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.use(cors())



// http security middleware
app.use(helmet())

// request limmiter middleware
app.use(
      rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
        standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers
        message:
		'Too many accounts created from this IP, please try again after 15 minutes.',
    })
)


app.get('/', (req:Request , res:Response)=>{
    res.send('hello')
})


// error handler middleware
app.use(errorMiddleware)


// route not exist handler
app.use((req:Request, res:Response)=>{
    res.status(404).json({
        message: 'Page not found !!'
    })
})
// start express server
const port = config.port || 3000




app.listen(port , ()=> {
  console.log(`server is running on port ${port} ...`);  
})