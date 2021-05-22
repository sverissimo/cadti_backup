import { FileEntity } from "../entities/FileEntity";
import dotenv from 'dotenv'


if (!process.env.HOME_PATH)
    dotenv.config()

export class FolderService {

    getFolderName(file: FileEntity): string {
        const
            { codigoEmpresa, razaoSocial: razaoSocialRaw, subfolderName } = file
            , baseFolder = process.env.HOME_PATH || 'd:\\ARQUIVOS_CADTI'
            , razaoSocial = this.sanitize(razaoSocialRaw)
            , rootFolder = `${codigoEmpresa} - ${razaoSocial}`
            , folderName = `${baseFolder}\\${rootFolder}\\${subfolderName}\\`

        return folderName
    }

    sanitize(razaoSocialRaw: any) {
        if (razaoSocialRaw) {
            const razaoSocial = razaoSocialRaw
                .replace('\/', ' ')
                .replace('S.A.', 'SA')
                .replace('S/A.', 'SA')
                .replace('LTDA.', 'LTDA')
            return razaoSocial
        }
    }
}