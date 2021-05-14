import fs from 'fs'
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

            //console.log("🚀 ~ file: FileService.js ~ line 21 ~ metadata", { folder, metadata })
            if (!fs.existsSync(path))
                fs.mkdirSync(path, { recursive: true })

            fs.writeFileSync(path + filename, data)
        }
    }
}

export { FileService }