import { IMetadata } from "./IFileMetadata";

export class FileEntity {
    filename: string
    fieldName: string;
    codigoEmpresa: number;
    razaoSocial: string;
    md5: string;
    tempFile: boolean;
    subfolderName: string;
    metadata: IMetadata;

    constructor(metadata: IMetadata) {
        const { fieldName, razaoSocial, empresaId: codigoEmpresa } = metadata

        this.fieldName = fieldName
        this.codigoEmpresa = codigoEmpresa
        this.razaoSocial = razaoSocial
    }
}