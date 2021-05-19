import webSocketClient from 'socket.io-client'
import { FileService } from '../services/FileService'
import dotenv from 'dotenv'
import { IMetadata } from '../entities/IFileMetadata'
import { FileEntity } from '../entities/FileEntity'


let client: any
const fileService = new FileService

if (!process.env.AUTH)
    dotenv.config()

if (!client)
    client = webSocketClient('ws://localhost:3001', { extraHeaders: { 'Authorization': process.env.AUTH } })

client.on('connect', () => {
    console.log('#### CadTI file backup started!! ####')
    client.emit('userDetails', 'whatever')
})

/* client.on('fileBackup', ({ files, fields }: { files: Array<string>, fields: any }) => {
    fileService.saveTempFile({ files, fields })
    console.log('written.')
}) */

client.on('permanentBackup', (files: Array<FileEntity>) => {
    fileService.savePermanentFile(files)
    console.log('stored.')
})


client.on('close', () => console.log('Warning: o serviço de backup para a máquina local da Seinfra foi desconectado.'))