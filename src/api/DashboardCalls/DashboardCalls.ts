import axios from "axios"
import { ShelterStatsTypes } from "mocks/handlers/shelterStatsHandler"

export const shelterDataHandler = async () => {
    try {
      const response = await axios.get<ShelterStatsTypes>('/shelters/stats')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }