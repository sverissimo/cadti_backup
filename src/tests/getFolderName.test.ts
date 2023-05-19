import assert from 'assert'
import { FolderService } from '../services/FolderService'
import { fileMock2 } from './mocks/fileMock2'

const callTracker = new assert.CallTracker()
process.on('exit', () => callTracker.verify())

//testing saveFilesById method
{
    const { metadata } = fileMock2
    const result = FolderService.getFolderName(metadata)
    console.log("🚀 ~ file: sanitizeFolder.test.ts:12 ~ result:", result)
    //assert.match(result, /^((?!(:|\||\/)).)*$/)
    //assert.deepStrictEqual(['fieldName', 'empresaId'].every((k: string) => metadataKeys.includes(k)), true)
}
