import dotenv from 'dotenv';

if (!process.env.NODE_ENV) {
    dotenv.config()
}

const keys = [
    'NODE_ENV',
    'HOST',
    'AUTH',
    'BACKUP_FOLDER',
    'BACKUP_FOLDER_TST',
]


interface Environment {
    NODE_ENV: string
    AUTH: string
    HOST: string
    BACKUP_FOLDER: string
    BACKUP_FOLDER_TST: string
}

export const env: Environment = keys
    .map(key => process.env.NODE_ENV !== 'production' && key !== 'NODE_ENV' ? key + '_DEV' : key)
    .reduce((acc, key, i) => {
        return Object.assign(acc, { [keys[i]]: process.env[key] })
    }, {} as Environment)

console.log("🚀 ~ file: env.ts:14 ~ keys:", env)