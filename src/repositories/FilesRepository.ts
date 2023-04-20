import { saveFile } from '../api';
import { SaveFileInfo } from '../interfaces/SaveFileInfo';


class FileRepository {
    async getDataFromDBAndSave(saveInfo: SaveFileInfo) {
        console.log("🚀 ~ file: FilesRepository.ts:7 ~ FileRepository ~ getDataFromDBAndSave ~ saveInfo:", saveInfo)
        const { id, localFolder, networkFolder, filename, collection } = saveInfo
        const localPath = localFolder + filename
        const networkPath = networkFolder + filename
        saveFile({ id, collection, localPath, networkPath })

    } catch(error) {
        console.log(error)
    }
}

export { FileRepository }