import fs from 'fs'
import path from 'path'
import { FileEntity } from '../entities/FileEntity'
import { FileRepository } from '../repositories/FilesRepository'
import { FolderService } from './FolderService'

class FileService {

    saveFilesByID(files: Partial<FileEntity>[]) {
        for (const f of files) {
            const { id, filename, metadata } = f
            const { placa } = metadata
            const collection: string = placa ? 'vehicleDocs' : 'empresaDocs'
            const { localFolder, networkFolder } = FolderService.getFolderName(metadata)

            FolderService.createFolders(localFolder, networkFolder)
            const localPath = this.renameIfExists(`${localFolder}\\${filename}`)
            const networkPath = this.renameIfExists(`${networkFolder}\\${filename}`)

            new FileRepository().getDataFromDBAndSave({ id, localPath, networkPath, collection })
        }
    }

    renameIfExists(filePath, count = 0): string {
        const directory = path.dirname(filePath);
        const extension = path.extname(filePath);
        const baseName = path.basename(filePath, extension);

        let suffix = '';
        if (count > 0) {
            suffix = `_${count}`;
        }
        const availableFilePath = path.join(directory, `${baseName}${suffix}${extension}`);

        if (fs.existsSync(availableFilePath)) {
            return this.renameIfExists(filePath, count + 1);
        }

        return availableFilePath;
    }
}


export { FileService }
