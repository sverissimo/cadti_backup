import axios from "axios";

class VehicleRepository {

    async getVehiclePlate(veiculoId: number) {
        console.log("🚀 ~ file: VehicleRepository.ts ~ line 6 ~ VehicleRepository ~ getVehiclePlate ~ veiculoId", veiculoId)

        try {
            const veiculo = await axios.get(`http://200.198.42.167/api/getOne?table=veiculos&key=veiculo_id&value=${veiculoId}`,
                {
                    headers: {
                        Authorization: process.env.AUTH
                    }
                })
            return veiculo?.data
        } catch (error) {
            console.error(error)
        }
    }
}

export { VehicleRepository }