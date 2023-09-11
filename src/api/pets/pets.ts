import { mostPopularPetsHandlerTypes } from "mocks/handlers/mostPopularPetsHandler"
import { newestPetsHandlerTypes } from "mocks/handlers/newestPetsHandler"
import { mockClient, productionClient } from "api/client"
import { defaultNewPetTypes } from "components/Dashboard/DashboardPetsCardsComponents/MutationCards/NewPetCard/PetsNewPetCard"
import { stringify } from 'qs'

export interface PetsCardsTypes {
  petInListInShelterDto: [
    {
      id: string;
      petIdentifier: string;
      name: string;
      type: string;
      gender: string;
      breed: string;
      color: string;
      weight: number;
      profilePhoto: string;
      photos: string[];
      age: number;
      createdAt: string;
      isSterilized: boolean;
      isVisible: boolean;
      description: string;
    }
  ];
  totalPages: number;
  itemFrom: number;
  itemsTo: number;
  totalItemsCount: number;
}

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

  export const petListInShelter = async () => {
    try {
      const response = await productionClient.get<PetsCardsTypes>(
        '/shelters/cards/petlistinshelter',
        { params: { pagenumber: 1, pagesize: 10, sortparam: 'createdat' } }
      );
      return response.data.petInListInShelterDto;
    } catch (error) {
      console.log(error);
    }
  };