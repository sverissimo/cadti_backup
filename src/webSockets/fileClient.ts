import webSocketClient from 'socket.io-client'
import { FileService } from '../services/FileService'
import { FileEntity } from '../entities/FileEntity'
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

client.on('fileBackup', ({ files, fields }: { files: Array<string>, fields: any }) => {
    fileService.saveTempFile({ files, fields })
    console.log('written.', { files, fields })
})

client.on('permanentBackup', (files: Partial<FileEntity>[]) => {
    fileService.saveFilesByID(files)
    console.log('stored. n:', files.length)
})

client.on('error', err => console.error(err))

client.on('close', () => console.log('### Warning ### o serviço de backup para a máquina local da Seinfra foi desconectado.'))
