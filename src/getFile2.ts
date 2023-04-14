import fs from 'fs'
import https from 'https'
import http from 'http'
import { env } from './config/env'

console.log("🚀 ~ file: getFile3.ts:8 ~ env:", env)


const run = async () => {
    //const id = '603e36dd2ed33f1630640b8b'
    //const id = '60c01832c51f1f0198e46924'
    const id = "60ac47987ef35a18248e57c1"
    const requestOptions = {
        hostname: env.HOST,
        path: `/api/mongoDownload?id=${id}&collection=empresaDocs`,
        //port: 3001,
        headers: {
            Authorization: env.AUTH
        }
    }

    try {
        const file = fs.createWriteStream('fk.docx')
        const req = https.get(requestOptions, res => {
            res.pipe(file)
            file.on('finish', () => file.close())
        })

        /*  const
           reqMetadata = await axios.get(`${hostname}/api/getOneFile?id=${id}&collection=empresaDocs`, {
               headers: {
                   Authorization: process.env.AUTH
               }
           })
           , metadata = reqMetadata.data
       console.log("🚀 ~ file: getFile.ts ~ line 26 ~ run ~ metadata", metadata) */



        /*             , res = await axios.get(`http://200.198.42.167/api/mongoDownload?id=${id}&collection=empresaDocs`, {
                                headers: {
                                    Authorization: process.env.AUTH
                                },
                                responseType: 'blob',
                            })
                 */            //, b = new Blob(a?.data)
        //, b = a?.data
        //fs.writeFileSync('tst.docx', c)
    } catch (error) {
        console.log(error.message)
    }
}

//run()
