import { saveFile } from '../api';
import { SaveFileInfo } from '../interfaces/SaveFileInfo';


class FileRepository {
    async getDataFromDBAndSave(saveInfo: SaveFileInfo) {
        const { id, localPath, networkPath, collection } = saveInfo

        saveFile({ id, collection, localPath, networkPath })

    } catch(error) {
        console.log(error)
    }
}

export { FileRepository }