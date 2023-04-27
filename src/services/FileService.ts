import fs from 'fs'
import path from 'path'
import { api } from '../api'
import { File } from '../interfaces/File'
import { FolderService } from './FolderService'

class FileService {
    saveFilesByID(files: Partial<File>[]) {
        for (const f of files) {
            const { id, filename, metadata } = f
            const { veiculoId } = metadata
            const collection: string = veiculoId ? 'vehicleDocs' : 'empresaDocs'
            const { localFolder, networkFolder } = FolderService.getFolderName(metadata)

            FolderService.createFolders(localFolder, networkFolder)
            const localPath = this.renameIfExists(`${localFolder}\\${filename}`)
            const networkPath = this.renameIfExists(`${networkFolder}\\${filename}`)

            const result = api.downloadAndSave({ id, collection, localPath, networkPath })
            return result
        }
    }

    renameIfExists(filePath, count = 0): string {
        const directory = path.dirname(filePath)
        const extension = path.extname(filePath)
        const baseName = path.basename(filePath, extension)
        let suffix = ''

        if (count > 0) {
            suffix = `_${count}`
        }

        const availableFilePath = path.join(directory, `${baseName}${suffix}${extension}`)

        if (fs.existsSync(availableFilePath)) {
            return this.renameIfExists(filePath, count + 1)
        }

        return availableFilePath
    }
}

export { FileService }
