import dotenv from 'dotenv';

if (!process.env.NODE_ENV) {
    dotenv.config()
}

const keys = [
    'NODE_ENV',
    'HOST',
    'AUTH',
    'WEBSOCKET_HOST',
    'BACKUP_FOLDER',
    'BACKUP_FOLDER_LOCAL',
    'BACKUP_TOKEN',
]

interface Environment {
    NODE_ENV: string
    AUTH: string
    HOST: string
    WEBSOCKET_HOST: string
    BACKUP_FOLDER: string
    BACKUP_FOLDER_LOCAL: string
    BACKUP_TOKEN: string
}

export const env: Environment = keys
    .map(key => process.env.NODE_ENV !== 'production' && key !== 'NODE_ENV' ? key + '_DEV' : key)
    .reduce((acc, key, i) => {
        return Object.assign(acc, { [keys[i]]: process.env[key] })
    }, {} as Environment)
