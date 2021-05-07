import { EmpresaRepository } from "../repositories/EmpresaRepository";

class EmpresaService {

    async getEmpresaName(codigoEmpresa: number) {
        console.log("🚀 ~ file: EmpresaService.ts ~ line 9 ~ EmpresaService ~ getEmpresaName ~ codigoEmpresa", codigoEmpresa)
        const
            empresaRepository = new EmpresaRepository()
            , empresa = await empresaRepository.getEmpresaName(codigoEmpresa)

        return empresa
    }
}

export { EmpresaService }