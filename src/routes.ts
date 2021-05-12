import { Router } from 'express'
import { MainController } from './controllers/MainController'

const routes = Router()
const controller = new MainController()

//routes.get('/', empresaController.tst)
//routes.get('/empresa/:codigoEmpresa', empresaController.getEmpresaName)

export default routes