import { mostPopularPetsHandlerTypes } from "mocks/handlers/mostPopularPetsHandler"
import { newestPetsHandlerTypes } from "mocks/handlers/newestPetsHandler"
import { mockClient } from "api/client"

  export const mostPopularPetsHandler = async () => {
    try {
      const response = await mockClient.get<mostPopularPetsHandlerTypes>('/shelters/popularPets')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  export const newestPetsHandler = async () => {
    try {
      const response = await mockClient.get<newestPetsHandlerTypes>('/shelters/newestPets')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

