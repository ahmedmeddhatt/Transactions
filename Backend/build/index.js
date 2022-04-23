"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const config_1 = __importDefault(require("./config"));
const error_middleware_1 = __importDefault(require("./middlewares/error_middleware"));
const cors_1 = __importDefault(require("cors"));
const models_1 = __importDefault(require("./models"));
const routes_index_1 = __importDefault(require("./routes/routes_index"));
// import Sequelize from "sequelize";
const db = require('./models');
// create instance server
const app = (0, express_1.default)();
// routes
app.use('/api', routes_index_1.default);
// parser incoming requests middleware
app.use(express_1.default.json());
(0, models_1.default)();
// sequelize()
// http request logger middleware
app.use((0, morgan_1.default)('common'));
// cors
// const corsOptions = {
//   origin: '*'
// };
// app.use(cors(corsOptions));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use((0, cors_1.default)());
// http security middleware
app.use((0, helmet_1.default)());
// request limmiter middleware
app.use((0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Too many accounts created from this IP, please try again after 15 minutes.',
}));
app.get('/', (req, res) => {
    res.send('hello');
});
// error handler middleware
app.use(error_middleware_1.default);
// route not exist handler
app.use((req, res) => {
    res.status(404).json({
        message: 'Page not found !!'
    });
});
// start express server
const port = config_1.default.port || 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port} ...`);
});
