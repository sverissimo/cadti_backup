import fs from 'fs'
import { env } from '../config/env';
import { FileMetadata } from '../interfaces/FileMetadata';

type FolderNames = {
    localFolder: string
    networkFolder: string
}

export class FolderService {

    static getFolderName(metadata: Partial<FileMetadata>): FolderNames {
        const { empresaId: codigoEmpresa, razaoSocial: razaoSocialRaw } = metadata
        const subfolderName = this.getSubFolder(metadata)
        const razaoSocial = this.sanitize(razaoSocialRaw)
        const rootFolder = `${codigoEmpresa} - ${razaoSocial}`
        const networkFolder = `${env.BACKUP_FOLDER}/${rootFolder}/${subfolderName}`
        const localFolder = `${env.BACKUP_FOLDER_LOCAL}\\${rootFolder}\\${subfolderName}`
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
                .replace('S A', 'SA')
                .replace('LTDA.', 'LTDA')
            return razaoSocial
        }
    }

    private static getSubFolder(metadata: Partial<FileMetadata>): string {
        const { fieldName, placa } = metadata

        if (placa)
            return `\\Veículos\\${placa}`

        switch (fieldName) {
            case 'procuracao':
                return 'Procurações'
            case 'contratoSocial':
                return 'Contrato Social'
            case 'apoliceDoc':
                return 'Apólices'
            case 'altContratoDoc':
                return 'Alterações de contrato social'
            case 'crc':
                return 'CRC'
            default: return ''
        }
    }
}
