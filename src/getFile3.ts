import axios from "axios";
import dotenv from 'dotenv'
import fs from 'fs'
import http from 'http'

if (!process.env.AUTH)
    dotenv.config()

const run = async () => {
    const
        id = '603e36dd2ed33f1630640b8b'
        , requestOptions = {
            hostname: process.env.HOSTNAME
            , path: `/api/mongoDownload?id=${id}&collection=empresaDocs`
            , method: 'GET'
            , headers: {
                Authorization: process.env.AUTH
            }
        }
        , { hostname, method, headers } = requestOptions

    try {
        /*  const
             reqMetadata = await axios.get(`${hostname}/api/getOneFile?id=${id}&collection=empresaDocs`, {
                 headers: {
                     Authorization: process.env.AUTH
                 }
             })
             , metadata = reqMetadata.data
         console.log("🚀 ~ file: getFile.ts ~ line 26 ~ run ~ metadata", metadata) */

        const file = fs.createWriteStream('empresas.xlsx')

        http.get({
            hostname: process.env.HOSTNAME
            , path: `/api/mongoDownload?id=${id}&collection=empresaDocs`
            , method: 'GET'
            , headers: {
                Authorization: process.env.AUTH
            }
        }, res => {
            res.pipe(file)
            file.on('finish', () => file.close())
        })

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

run()


