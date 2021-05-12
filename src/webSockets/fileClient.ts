import webSocketClient from 'socket.io-client'
import { FileService } from '../services/FileService'
import dotenv from 'dotenv'


let client: any
const fileService = new FileService

if (!process.env.AUTH)
    dotenv.config()

if (!client)
    client = webSocketClient('ws://localhost:3001', { extraHeaders: { 'Authorization': process.env.AUTH } })

client.on('connect', () => {
    console.log('#### Tst file backup started!! ####')
    client.emit('userDetails', 'whatever')
})
client.on('a', async ({ files, fields }) => {
    await fileService.saveFile({ files, fields })
    console.log('written.')
})

client.on('close', () => console.log('Goodbye!'))