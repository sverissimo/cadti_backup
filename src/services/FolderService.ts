import { FileEntity } from "../entities/FileEntity";
import { env } from "../config/env";

export class FolderService {

    getFolderName(file: FileEntity): string {
        console.log("🚀 ~ file: FolderService.ts:8 ~ FolderService ~ getFolderName ~ file:", file)
        const { codigoEmpresa, razaoSocial: razaoSocialRaw, subfolderName } = file
        const baseFolder = env.BACKUP_FOLDER
        const razaoSocial = this.sanitize(razaoSocialRaw)
        const rootFolder = `${codigoEmpresa} - ${razaoSocial}`
        const folderName = `${baseFolder}/${rootFolder}/${subfolderName}/`

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
