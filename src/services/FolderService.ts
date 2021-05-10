import { EmpresaRepository } from "../repositories/EmpresaRepository";


interface IFolder {
    codigoEmpresa: number
    subfolderName: string
}

export class FolderService {

    async getFolderName(info: IFolder) {
        const
            { codigoEmpresa, subfolderName } = info
            , baseFolder = 'd:\\ARQUIVOS_CADTI'
            , razaoSocial = await this.getEmpresaName(codigoEmpresa)
            , rootFolder = `${codigoEmpresa} - ${razaoSocial}`
            , folderName = `${baseFolder}\\${rootFolder}\\${subfolderName}\\`

        return folderName
    }

    async getEmpresaName(codigoEmpresa: number) {
        console.log("🚀 ~ file: EmpresaService.ts ~ line 9 ~ EmpresaService ~ getEmpresaName ~ codigoEmpresa", codigoEmpresa)
        const
            empresaRepository = new EmpresaRepository()
            , empresa = await empresaRepository.getEmpresaName(codigoEmpresa)

        return empresa?.razao_social
    }

    getVeiculoPlate?(veiculoId: number) {

    }

}