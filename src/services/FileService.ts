import { FileEntity } from '../entities/FileEntity'
import { IMetadata } from '../entities/IFileMetadata'
import { FileRepository } from '../repositories/FilesRepository'
import { FileFactory } from '../utils/FilesFactory'
import { FolderService } from './FolderService'


class FileService {

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

    savePermanentFile(files: Array<FileEntity>) {
        console.log("🚀 ~ file: FileService.ts ~ line 28 ~ FileService ~ savePermanentFile ~ files", files)

        for (let f of files) {
            console.log("🚀 ~ file: FileService.ts ~ line 30 ~ FileService ~ savePermanentFile ~ f", f)
            const
                { id, filename, metadata } = f
                , { placa } = metadata

                , file = new FileFactory().create(filename, metadata)
                , folder = new FolderService().getFolderName(file)
                , fileRepository = new FileRepository()

            fileRepository.getDataFromDBAndSave(id, folder, filename, placa)
            //fileRepository.saveToDisk({ folder, data })
        }
    }
}


export { FileService }