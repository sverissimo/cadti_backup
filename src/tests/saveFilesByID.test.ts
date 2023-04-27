import assert from 'assert'
import { FileService } from '../services/FileService'
import vehicleFilesMock from './mocks/vehicleFilesMock.json'

const callTracker = new assert.CallTracker()
process.on('exit', () => callTracker.verify())

//testing saveFilesById method
{
    const result = new FileService().saveFilesByID(vehicleFilesMock)
    assert.match(result, /saved/)
    //assert.deepStrictEqual(['fieldName', 'empresaId'].every((k: string) => metadataKeys.includes(k)), true)
}
