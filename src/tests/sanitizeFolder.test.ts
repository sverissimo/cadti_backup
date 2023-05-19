import assert from 'assert'
import { FolderService } from '../services/FolderService'

const callTracker = new assert.CallTracker()
process.on('exit', () => callTracker.verify())

//testing saveFilesById method
{
    const companyName = 'SPECIAL BUS LIMITADA S/A. LTDA. | (Fantasia: XAVIER TUR)'
    const companyName2 = 'VIACAO VICOSA LTDA. EPP (Nome Fantasia: TRANSVITUR)'
    console.log("🚀 ~ file: sanitizeFolder.test.ts:11 ~ companyName2:", companyName2)
    const result = FolderService.sanitize(companyName2)
    console.log("🚀 ~ file: sanitizeFolder.test.ts:12 ~ result:", result)
    assert.match(result, /^((?!(:|\||\/)).)*$/)
    //assert.deepStrictEqual(['fieldName', 'empresaId'].every((k: string) => metadataKeys.includes(k)), true)
}
