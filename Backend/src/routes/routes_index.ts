import { Router } from "express";
import Routes from './routes'

const routes = Router()

routes.use('/seller', Routes)


export default routes