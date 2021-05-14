import express from 'express'
import dotenv from 'dotenv'
import './webSockets/fileClient'

const app = express()
dotenv.config()

app.listen(3003, () => console.log('Ts node running...'));