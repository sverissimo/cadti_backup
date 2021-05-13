import { MainController } from "../controllers/MainController";
import { FileEntity } from "../entities/FileEntity";


export class FolderService {

    async getFolderName(file: FileEntity) {
        const
            { codigoEmpresa, subfolderName } = file
            , baseFolder = 'd:\\ARQUIVOS_CADTI'
            , razaoSocialRaw = await this.getEmpresaName(codigoEmpresa)
            , razaoSocial = razaoSocialRaw.replace('\/', ' ')
            , rootFolder = `${codigoEmpresa} - ${razaoSocial}`
            , folderName = `${baseFolder}\\${rootFolder}\\${subfolderName}\\`

        return folderName
    }

    async getEmpresaName(codigoEmpresa: number): Promise<any> {
        const
            controller = new MainController()
            , { razao_social } = await controller.getEmpresa(codigoEmpresa)

        return razao_social
    }

    /* getVeiculoPlate?(veiculoId: number) {

    } */

}