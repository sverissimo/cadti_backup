import { FileMetadata } from "./FileMetadata";

export class FileEntity {
    id: string;
    filename: string
    fieldName: string;
    codigoEmpresa: number;
    razaoSocial: string;
    md5: string;
    tempFile: boolean;
    subfolderName: string;
    metadata: FileMetadata;

    constructor(filename: string, metadata: FileMetadata) {
        const { fieldName, razaoSocial, empresaId: codigoEmpresa } = metadata

        this.filename = filename
        this.fieldName = fieldName
        this.codigoEmpresa = codigoEmpresa
        this.razaoSocial = razaoSocial
    }
}