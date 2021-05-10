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
}