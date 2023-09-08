import { mostPopularPetsHandlerTypes } from "mocks/handlers/mostPopularPetsHandler"
import { newestPetsHandlerTypes } from "mocks/handlers/newestPetsHandler"
import { mockClient, productionClient } from "api/client"
import { defaultNewPetTypes } from "components/Dashboard/DashboardPetsCardsComponents/MutationCards/NewPetCard/PetsNewPetCard"
import { stringify } from 'qs'

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

  export const getImagesId = async (images: FormData) => {
    try {
      const response = await productionClient.post('/storage', images)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  export const getImagesUrl = async (ids: string[]) => {
    try {
      const response = await productionClient.get(`/Storage`, {
        params: { ids: ids },
        paramsSerializer: (params) => stringify(params),
      })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  export const createNewPetHandler = async (newPetData: defaultNewPetTypes) => {
    try {
      const response = await productionClient.post('/shelters/cards/createpet', newPetData)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }