import fs from 'fs'
import { env } from '../config/env';
import { FileEntity } from "../entities/FileEntity";

type FolderNames = {
    localFolder: string
    networkFolder: string
}

export class FolderService {

    static getFolderName(file: FileEntity): FolderNames {
        const { codigoEmpresa, razaoSocial: razaoSocialRaw, subfolderName } = file
        const razaoSocial = this.sanitize(razaoSocialRaw)
        const rootFolder = `${codigoEmpresa} - ${razaoSocial}`
        const folderName = `${rootFolder}/${subfolderName}/`
        const networkFolder = `${env.BACKUP_FOLDER}\\${folderName}`
        const localFolder = `${env.BACKUP_FOLDER_LOCAL}\\${folderName}`
        return { localFolder, networkFolder }
    }

    static createFolders(...folders: string[]): void {
        for (const folder of folders) {
            if (!fs.existsSync(folder)) {
                fs.mkdirSync(folder, { recursive: true })
            }
        }
        return
    }

    static sanitize(razaoSocialRaw: any) {
        if (razaoSocialRaw) {
            const razaoSocial = razaoSocialRaw
                .replace('\/', ' ')
                .replace('S.A.', 'SA')
                .replace('S/A.', 'SA')
                .replace('S A.', 'SA')
                .replace('LTDA.', 'LTDA')
            return razaoSocial
        }
    }
}
