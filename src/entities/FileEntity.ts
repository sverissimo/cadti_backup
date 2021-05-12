interface IFile {
    filename: string
    fieldName: string;
    codigoEmpresa: number;
    tempFile: boolean;
    subfolderName: string;
}

export class FileEntity implements IFile {
    filename: string
    fieldName: string;
    codigoEmpresa: number;
    tempFile: boolean;
    subfolderName: string;

    constructor(codigoEmpresa: number, fieldName: string) {
        this.fieldName = fieldName
        this.codigoEmpresa = codigoEmpresa
        this.setSubfolder()
    }

    setSubfolder() {
        switch (this.fieldName) {
            case 'procuracao':
                this.subfolderName = 'Procurações'
                break;
            default: return ''
        }

    }
}