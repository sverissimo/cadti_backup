import fs from 'fs'
import https from 'https'
import http from 'http'
import { env } from '../config/env'

let protocol: any = https
if (env.NODE_ENV !== 'production') {
    protocol = http
}
//const id = "60ac47987ef35a18248e57c1"
const id = "60d27c962f32a212dccaf830"
const baseUrl = `/api/mongoDownload`
const port = env.NODE_ENV !== 'production' ? 3001 : undefined

const defaultOptions = {
    host: env.HOST,
    path: `/api/mongoDownload?id=${id}&collection=empresaDocs`,
    port,
    headers: {
        Authorization: env.AUTH
    }
}

export const saveFile = (options) => {
    const { id, collection, localPath, networkPath } = options
    const path = `${baseUrl}?id=${id}&collection=${collection}`
    const requestOptions = { ...defaultOptions, path }

    try {
        const localFile = fs.createWriteStream(localPath)
        const networkFile = fs.createWriteStream(networkPath)
        protocol.get(requestOptions, res => {
            res.pipe(localFile)
            res.pipe(networkFile)
            localFile.on('finish', () => localFile.close())
            networkFile.on('finish', () => networkFile.close())
        })
        return '### File saved successfully.'

    } catch (err) {
        console.log("🚀 ~ file: index.ts:31 ~ saveFile ~ err:", err)
    }
}
