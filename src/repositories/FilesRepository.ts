import fs from 'fs'
import http from 'http'


interface IDataToSave {
    path: string;
    data: Buffer;
}

class FileRepository {

    async getDataFromDBAndSave(id: string, folder: string, filename: string) {

        const
            //            , md5 = 'c18faf1bdee9dec114a8e19b37841d66'
            requestOptions = {
                //hostname: '200.198.42.167'
                host: 'localhost'
                , port: 3001
                , path: `/api/mongoDownload?id=${id}&collection=empresaDocs`
                , method: 'GET'
                , headers: {
                    Authorization: process.env.AUTH || 'mengo'
                }
            }
        //Cria stream gravável e obtém os dados binários do arquivo para salvar.
        try {
            //Se o diretório não existe, criar            
            if (!fs.existsSync(folder))
                fs.mkdirSync(folder, { recursive: true })

            console.log("🚀 ~ file: FilesRepository.ts ~ line 34 ~ FileRepository ~ getDataFromDBAndSave ~ filename", filename)
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