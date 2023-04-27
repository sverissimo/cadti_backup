import assert from 'assert'
import { FileMetadata } from '../interfaces/FileMetadata'
import { FileService } from '../services/FileService'
import { fileMock } from './mocks/fileMock'
import { env } from '../config/env'

const callTracker = new assert.CallTracker()
process.on('exit', () => callTracker.verify())

//testing renameIfExists method
{
    let metadataArg
    const getFolderSpy = callTracker.calls((metadata) => { metadataArg = metadata }, 1)

    const FolderServiceStub = {
        getFolderName(metadata: FileMetadata) {
            getFolderSpy(metadata)
            return `${env.BACKUP_FOLDER_LOCAL}\\src\\tests\\mocks\\testFile.txt`
        }
    }

    const filePath = FolderServiceStub.getFolderName(fileMock.metadata)
    const fileName = new FileService().renameIfExists(filePath)
    const metadataKeys = Reflect.ownKeys(metadataArg)

    assert.match(fileName, /testFile_1.txt/)
    assert.deepStrictEqual(['fieldName', 'empresaId'].every((k: string) => metadataKeys.includes(k)), true)
}
