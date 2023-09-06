import { productionClient } from "api/client"

export const volunteringStatsHandler = async () => {
    try {
      const response = await productionClient.get('/shelters/volunteering/GetShelterVolunteering')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }