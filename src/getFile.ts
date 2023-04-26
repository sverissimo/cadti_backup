import axios from "axios";
import dotenv from 'dotenv'
import fs from 'fs'
import http from 'http'
import { FileEntity } from "./entities/FileEntity";
import { FileMetadata } from './entities/FileMetadata'

if (!process.env.AUTH)
    dotenv.config()

const run = async () => {
    const
        id = '603e36dd2ed33f1630640b8b'
        , md5 = 'c18faf1bdee9dec114a8e19b37841d66'
        , requestOptions = {
            hostname: '200.198.42.167'
            , path: `/api/mongoDownload?id=${id}&collection=empresaDocs`
            , method: 'GET'
            , headers: {
                Authorization: process.env.AUTH
            }
        }

    try {
        const
            reqMetadata = await axios.get(`http://200.198.42.167/api/getOneFile?md5=${md5}&collection=empresaDocs`, {
                headers: {
                    Authorization: process.env.AUTH
                }
            })
            , file: FileEntity = reqMetadata.data
            , metadata: FileMetadata = file.metadata
            , { filename } = file

        console.log(file)
        //Cria stream gravável e obtém os dados binários do arquivo para salvar.
        /*  const fileStream = fs.createWriteStream(filename)
         http.get(requestOptions, res => {
             res.pipe(fileStream)
             fileStream.on('finish', () => fileStream.close())
         }) */
    } catch (error) {
        console.log(error.message)
    }
}

run()


