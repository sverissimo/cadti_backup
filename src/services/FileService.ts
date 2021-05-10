import fs from 'fs'
import { FolderService } from './FolderService'

class FileService {

    async saveFile({ files, fields }): Promise<any> {

        const
            data = Buffer.from(files, 'base64')
            , { filename, metadata } = fields[0] && fields[0]
            , { fieldName, empresaId } = metadata
            , folderService = new FolderService()
            , folder = await folderService.getFolderName({ codigoEmpresa: empresaId, subfolderName: 'Procurações' })
            , path = folder

        //console.log("🚀 ~ file: tst.js ~ line 19 ~ files", { fieldName, empresaId }, fields)

        if (!fs.existsSync(path))
            fs.mkdirSync(path, { recursive: true })

        fs.writeFileSync(path + filename, data)
    }
}

export { FileService }