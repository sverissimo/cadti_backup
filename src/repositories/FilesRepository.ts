import fs from 'fs'
import { saveFile } from '../api';

interface IDataToSave {
    path: string;
    data: Buffer;
}

class FileRepository {
    async getDataFromDBAndSave(id: string, folder: string, filename: string, placa: string) {

        const collection: string = placa ? 'vehicleDocs' : 'empresaDocs'

        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder, { recursive: true })
        }

        saveFile(folder + filename, { id, collection })

    } catch(error) {
        console.log(error)
    }
}

export { FileRepository }