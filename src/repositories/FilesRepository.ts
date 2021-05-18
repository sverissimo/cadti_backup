import fs from 'fs'

interface dataToSave {
    path: string;
    md5: string;
    data: Buffer;
}

class FileRepository {

    saveToDisk({ path, md5, data }: dataToSave) {
        if (!fs.existsSync(path))
            fs.mkdirSync(path, { recursive: true })

        fs.writeFileSync(path + md5, data)
    }
}

export { FileRepository }