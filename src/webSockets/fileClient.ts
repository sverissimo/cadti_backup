import webSocketClient from 'socket.io-client'
import { FileService } from '../services/FileService'
import { File } from '../interfaces/File'
import { env } from '../config/env'

const fileService = new FileService
let client: any

if (!client) {
    client = webSocketClient(`${env.WEBSOCKET_HOST}/`, { extraHeaders: { 'Authorization': env.AUTH } })
}

client.on('connect', () => {
    console.log('#### CadTI file backup started!! ####')
    const user = { role: 'backupService', token: env.BACKUP_TOKEN }
    client.emit('userDetails', user)
})

client.on('newFileSaved', (files: Partial<File>[]) => {
    console.log("🚀 ~ file: fileClient.ts:20 ~ client.on ~ files:", files)
    const result = fileService.saveFilesByID(files)
    console.log("🚀 ~ file: fileClient.ts:22 ~ client.on ~ result:", result)
})

client.on('error', err => console.error(err))

client.on('close', () => console.log('### Warning ### o serviço de backup para a máquina local da Seinfra foi desconectado.'))
