import { FileRepository } from '../repositories/FilesRepository'
import { FileFactory } from '../utils/FilesFactory'
import { FolderService } from './FolderService'


class FileService {

    saveFile({ files, fields }: { files: Array<string>, fields: any }) {

        let i = 0
        for (let f of files) {
            const
                data = Buffer.from(f, 'base64')
                , { filename, metadata } = fields[i] && fields[i]
                , file = new FileFactory().create(metadata)
                , folder = new FolderService().getFolderName(file)
                , path = folder
            i++

            const fileRepository = new FileRepository()
            fileRepository.saveToDisk({ path, filename, data })
        }
    }
}

export { FileService }