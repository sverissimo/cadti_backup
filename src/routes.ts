import { Router } from 'express'
import { EmpresaController } from './controllers/EmpresaController'

const routes = Router()
const empresaController = new EmpresaController()

routes.get('/', empresaController.tst)
routes.get('/empresa/:codigoEmpresa', empresaController.getEmpresaName)

export default routes