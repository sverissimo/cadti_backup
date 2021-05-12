import fs from 'fs'
import { FileEntity } from '../entities/FileEntity'
import { FolderService } from './FolderService'

class FileService {

    async saveFile({ files, fields }) {

        const
            data = Buffer.from(files, 'base64')
            , { filename, metadata } = fields[0] && fields[0]
            , { fieldName, empresaId } = metadata
            , file = new FileEntity(empresaId, fieldName)
            , folderService = new FolderService()
            , folder = await folderService.getFolderName(file)
            , path = folder

        //console.log("🚀 ~ file: tst.js ~ line 19 ~ files", { fieldName, empresaId }, fields)

        if (!fs.existsSync(path))
            fs.mkdirSync(path, { recursive: true })

        fs.writeFileSync(path + filename, data)
    }
}

export { FileService }