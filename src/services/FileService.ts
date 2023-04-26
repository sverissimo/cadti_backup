import fs from 'fs'
import { FileEntity } from '../entities/FileEntity'
import { FileRepository } from '../repositories/FilesRepository'
import { FileFactory } from '../utils/FilesFactory'
import { FolderService } from './FolderService'

class FileService {

    saveFilesByID(files: Partial<FileEntity>[]) {
        console.log("🚀 ~ file: FileService.ts:9 ~ FileService ~ saveFilesByID ~ files:", files)
        for (const f of files) {
            const { id, filename, metadata } = f
            const { placa } = metadata
            const collection: string = placa ? 'vehicleDocs' : 'empresaDocs'
            const file = new FileFactory().create(filename, metadata)
            const { localFolder, networkFolder } = FolderService.getFolderName(file)

            FolderService.createFolders(localFolder, networkFolder)

            new FileRepository().getDataFromDBAndSave({ id, localFolder, networkFolder, filename, collection })
        }
    }

    saveTempFile({ files, fields }: { files: Array<string>, fields: any }) {
        const b1 = Buffer.from(files[0], 'base64')
        fs.writeFileSync('tst0001.txt', b1)
        /* for (const f of files) {
        } */
    }
}

export { FileService }

/*  saveTempFile({ files, fields }: { files: Array<string>, fields: any }) {

     let i = 0
     for (let f of files) {
         const
             data = Buffer.from(f, 'base64')
             , { md5, metadata } = fields[i] && fields[i]
             , file = new FileFactory().create(metadata)
             , folder = new FolderService().getFolderName(file)
             , path = folder
         i++

         const fileRepository = new FileRepository()
         fileRepository.saveToDisk({ path, md5, data })
     }
 } */
