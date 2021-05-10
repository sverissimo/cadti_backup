import axios from "axios";

class EmpresaRepository {

    async getEmpresaName(codigoEmpresa: number) {
        console.log("🚀 ~ file: EmpresaRepository.ts ~ line 6 ~ EmpresaRepository ~ getEmpresaName ~ codigoEmpresa", codigoEmpresa)

        try {
            const empresa = await axios.get(`http://200.198.42.167/api/getOne?table=empresas&key=codigo_empresa&value=${codigoEmpresa}`,
                {
                    headers: {
                        Authorization: process.env.AUTH
                    }
                })
            console.log("🚀 ~ file: EmpresaRepository.ts ~ line 19 ~ EmpresaRepository ~ getEmpresaName ~ empresa", empresa)
            return empresa?.data[0]
        } catch (error) {
            console.error(error)
        }
    }
}

export { EmpresaRepository }