import { FileEntity } from "../entities/FileEntity";
import { IMetadata } from "../entities/IFileMetadata";


export class FileFactory {

    create(metadata: IMetadata) {
        console.log("🚀 ~ file: FilesFactory.ts ~ line 8 ~ FileFactory ~ create ~ metadata", metadata);
        const
            file = new FileEntity(metadata)
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
            default: return ''
        }
    }
}