import fs from 'fs'
import path from 'path'
import { api } from '../api'
import { File } from '../interfaces/File'
import { FolderService } from './FolderService'

class FileService {
    saveFilesByID(files: Partial<File>[]) {
        const { metadata } = files[0]
        const { veiculoId } = metadata
        const collection: string = veiculoId ? 'vehicleDocs' : 'empresaDocs'
        const { localFolder, networkFolder } = FolderService.getFolderName(metadata)

        FolderService.createFolders(localFolder, networkFolder)

        for (const file of files) {
            const { filename, id, _id } = file
            const localPath = this.renameIfExists(`${localFolder}\\${filename}`)
            const networkPath = this.renameIfExists(`${networkFolder}\\${filename}`)

            api.downloadAndSave({ id: id || _id, collection, localPath, networkPath })
        }
        return `### ${files.length} files saved.`
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
