import axios from "axios"
import { ShelterStatsTypes } from "mocks/handlers/shelterStatsHandler"
import { mostPopularPetsHandlerTypes } from "mocks/handlers/mostPopularPetsHandler"

export const shelterDataHandler = async () => {
    try {
      const response = await axios.get<ShelterStatsTypes>('/shelters/stats')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  export const mostPopularPetsHandler = async () => {
    try {
      const response = await axios.get<mostPopularPetsHandlerTypes>('/shelters/popularPets')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }