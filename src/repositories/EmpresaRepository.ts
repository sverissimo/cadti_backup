import axios from "axios";

class EmpresaRepository {

    async getEmpresaName(codigoEmpresa: number) {
        console.log("🚀 ~ file: EmpresaRepository.ts ~ line 6 ~ EmpresaRepository ~ getEmpresaName ~ codigoEmpresa", codigoEmpresa)

        try {
            const tst = await axios.get(`http://200.198.42.167/api/getOne?table=empresas&key=codigo_empresa&value=${codigoEmpresa}`,
                {
                    headers: {
                        Authorization: process.env.AUTH
                    }
                })
            return tst?.data
        } catch (error) {
            console.error(error)
        }
    }
}

export { EmpresaRepository }