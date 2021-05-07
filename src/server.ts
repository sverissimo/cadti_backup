import express from 'express'
import routes from './routes'
import dotenv from 'dotenv'
import './webSockets/fileClient'

const app = express()
dotenv.config()
app.use(routes)

app.listen(3003, () => console.log('Ts node running...'));