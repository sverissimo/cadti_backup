import { env } from './config/env'
import { FileRepository } from './repositories/FilesRepository'

const run = async () => {
    //const id = '603e36dd2ed33f1630640b8b'
    //const id = '60c01832c51f1f0198e46924'
    //const id = "60ac47987ef35a18248e57c1"
    const id = "60d27c962f32a212dccaf830"
    const folder = env.BACKUP_FOLDER + '\\test\\'
    new FileRepository().getDataFromDBAndSave(id, folder, 'testingAsFuck.csv', null)
}

run()
