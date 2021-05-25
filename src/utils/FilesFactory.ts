import { FileEntity } from "../entities/FileEntity";
import { IMetadata } from "../entities/IFileMetadata";


export class FileFactory {

    create(filename: string, metadata: IMetadata) {
        console.log("🚀 ~ file: FilesFactory.ts ~ line 8 ~ FileFactory ~ create ~ metadata", metadata);
        const
            file = new FileEntity(filename, metadata)
            , subfolderName = this.setSubfolder(metadata)

        file.subfolderName = subfolderName
        return file
    }

    setSubfolder(metadata: IMetadata) {
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
