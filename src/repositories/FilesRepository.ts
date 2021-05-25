import fs from 'fs'
import http from 'http'


interface IDataToSave {
    path: string;
    data: Buffer;
}

class FileRepository {

    async getDataFromDBAndSave(id: string, folder: string, filename: string, placa: string) {
        let collection: string
        if (placa)
            collection = 'vehicleDocs'
        else
            collection = 'empresaDocs'

        const
            requestOptions = {
                host: '200.198.42.167'
                //host: 'localhost'
                //, port: 3001
                , path: `/api/mongoDownload?id=${id}&collection=${collection}`
                , method: 'GET'
                , headers: {
                    Authorization: process.env.AUTH
                }
            }
        //Cria stream gravável e obtém os dados binários do arquivo para salvar.
        try {
            //Se o diretório não existe, criar            
            if (!fs.existsSync(folder))
                fs.mkdirSync(folder, { recursive: true })

            console.log("🚀 ~ file: FilesRepository.ts ~ line 32 ~ FileRepository ~ getDataFromDBAndSave ~ id", id)
            const fileStream = fs.createWriteStream(folder + filename)
            http.get(requestOptions, res => {
                res.pipe(fileStream)
                fileStream.on('finish', () => fileStream.close())
            })
        } catch (error) {
            console.log(error)
        }
    }

    /*  saveToDisk({ path, data }: IDataToSave) {
         if (!fs.existsSync(path))
             fs.mkdirSync(path, { recursive: true })
 
         fs.writeFileSync(path, data)
     } */
}

export { FileRepository }