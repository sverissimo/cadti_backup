import { IMetadata } from "./IFileMetadata";

export class FileEntity {
    filename: string
    fieldName: string;
    codigoEmpresa: number;
    razaoSocial: string;
    tempFile: boolean;
    subfolderName: string;

    constructor(metadata: IMetadata) {
        const { fieldName, razaoSocial, empresaId: codigoEmpresa } = metadata

        this.fieldName = fieldName
        this.codigoEmpresa = codigoEmpresa
        this.razaoSocial = razaoSocial
        //this.setSubfolder()
    }

    /* setSubfolder() {
        switch (this.fieldName) {
            case 'procuracao':
                this.subfolderName = 'Procurações'
                break;
            default: return ''
        }
    } */
}