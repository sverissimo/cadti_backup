import { FileMetadata } from "./FileMetadata";

export interface File {
    id: string;
    length: number;
    chunkSize: number;
    uploadDate: string;
    filename: string
    md5: string;
    contentType: string;
    metadata: FileMetadata;
}