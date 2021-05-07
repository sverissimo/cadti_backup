import { Request, Response } from 'express'
import { EmpresaService } from '../services/EmpresaService'


class EmpresaController {


    tst(req: Request, res: Response) {
        res.send('hi im elfo.')
    }

    async getEmpresaName(req: Request, res: Response) {

        const
            codigoEmpresa = Number(req.params.codigoEmpresa)
            , empresaService = new EmpresaService()

        const empresa = await empresaService.getEmpresaName(codigoEmpresa)
        console.log(empresa)
        return res.json(empresa)
    }
}

export { EmpresaController }