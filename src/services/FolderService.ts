import { FileEntity } from "../entities/FileEntity";


export class FolderService {

    getFolderName(file: FileEntity): string {
        const
            { codigoEmpresa, razaoSocial: razaoSocialRaw, subfolderName } = file
            , baseFolder = 'd:\\ARQUIVOS_CADTI'
            , razaoSocial = this.sanitize(razaoSocialRaw)
            , rootFolder = `${codigoEmpresa} - ${razaoSocial}`
            , folderName = `${baseFolder}\\${rootFolder}\\${subfolderName}\\`

        return folderName
    }

    sanitize(razaoSocialRaw: any) {
        const razaoSocial = razaoSocialRaw
            .replace('\/', ' ')
            .replace('S.A.', 'SA')
            .replace('S/A.', 'SA')
            .replace('LTDA.', 'LTDA')
        return razaoSocial
    }
}