import webSocketClient from 'socket.io-client'
import { FileService } from '../services/FileService'
import { IMetadata } from '../entities/IFileMetadata'
import { FileEntity } from '../entities/FileEntity'
import { env } from '../config/env'

const fileService = new FileService
let client: any

if (!client) {
    client = webSocketClient(`${env.WEBSOCKET_HOST}/`, { extraHeaders: { 'Authorization': env.AUTH } })
}


client.on('connect', () => {
    console.log('#### CadTI file backup started!! ####')
    client.emit('userDetails', 'whatever')
})

/* client.on('fileBackup', ({ files, fields }: { files: Array<string>, fields: any }) => {
    fileService.saveTempFile({ files, fields })
    console.log('written.')
}) */

client.on('permanentBackup', (files: Partial<FileEntity>[]) => {
    console.log("🚀 ~ file: fileClient.ts ~ line 29 ~ client.on ~ files", files)
    fileService.savePermanentFile(files)
    console.log('stored.')
})

client.on('close', () => console.log('### Warning ### o serviço de backup para a máquina local da Seinfra foi desconectado.'))
