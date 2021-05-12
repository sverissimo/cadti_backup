import axios from 'axios'
import { Request, Response } from 'express'


interface IEmpresa {
    codigo_empresa: number,
    razao_social: string
}

class MainController {
    private host = '200.198.42.167'
    table: string
    key: string
    id: any

    async getEmpresa(codigoEmpresa: number): Promise<IEmpresa> {
        this.table = 'empresas'
        this.key = 'codigo_empresa'
        const empresa = await this.getData(codigoEmpresa)
        return empresa
    }

    async getData(id: number): Promise<any> {
        try {
            const
                query = `http://${this.host}/api/getOne?table=${this.table}&key=${this.key}&value=${id}`
                , request = await axios.get(query,
                    {
                        headers: {
                            Authorization: process.env.AUTH
                        }
                    })
            console.log(query)
            return request?.data[0]
        } catch (error) {
            console.error(error)
        }
    }
}

export { MainController }