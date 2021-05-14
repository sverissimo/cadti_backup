import fs from 'fs'

interface dataToSave {
    path: string;
    filename: string;
    data: Buffer;
}

class FileRepository {

    saveToDisk({ path, filename, data }: dataToSave) {
        if (!fs.existsSync(path))
            fs.mkdirSync(path, { recursive: true })

        fs.writeFileSync(path + filename, data)
    }
}

export { FileRepository }