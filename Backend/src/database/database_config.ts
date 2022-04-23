import { Sequelize , Dialect} from 'sequelize';

const seqConnection = new Sequelize('products','root', 'password',{
    host: 'localhost',
    dialect: 'mysql' as Dialect

})



export default seqConnection
