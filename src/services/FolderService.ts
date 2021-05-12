import { MainController } from "../controllers/MainController";
import { FileEntity } from "../entities/FileEntity";


interface IFolder {
    codigoEmpresa: number
    subfolderName: string
}


export class FolderService {

    async getFolderName(file: FileEntity) {
        const
            { codigoEmpresa, subfolderName } = file
            , baseFolder = 'd:\\ARQUIVOS_CADTI'
            , razaoSocial = await this.getEmpresaName(codigoEmpresa)
            , rootFolder = `${codigoEmpresa} - ${razaoSocial}`
            , folderName = `${baseFolder}\\${rootFolder}\\${subfolderName}\\`

        return folderName
    }

    async getEmpresaName(codigoEmpresa: number): Promise<any> {
        console.log("🚀 ~ file: EmpresaService.ts ~ line 9 ~ EmpresaService ~ getEmpresaName ~ codigoEmpresa", codigoEmpresa)
        const
            controller = new MainController()
            , { razao_social } = await controller.getEmpresa(codigoEmpresa)

        return razao_social
    }

    getVeiculoPlate?(veiculoId: number) {

    }

}