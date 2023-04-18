import { FileService } from './services/FileService'

const file = {
    id: "640a7645c947cc38d404f95b",
    length: 1120568,
    chunkSize: 261120,
    uploadDate: "2023-03-10T00:13:57.327+0000",
    filename: "ladyBug.jpg",
    md5: "319c78e54e1c4c0624c0c8263117af47",
    contentType: "image/jpeg",
    fieldName: "procuracao",
    empresaId: 9060,
    tempFile: false,
    metadata: {
        razaoSocial: 'Gontijo LTDA.',
        fieldName: "procuracao",
        empresaId: 9060,
        tempFile: false,
    }
}

const run = async () => {
    new FileService().savePermanentFile([file])
}

run()
