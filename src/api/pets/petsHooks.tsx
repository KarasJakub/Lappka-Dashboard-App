import { useQuery, useMutation } from "@tanstack/react-query"
import { shelterDataHandler } from "api/shelter/shelter"
import {
  mostPopularPetsHandler,
  newestPetsHandler,
  createNewPetHandler,
} from "./pets"

export const useShelterStatsHandler = () => {
  return useQuery(["shelterStats"], shelterDataHandler)
}

export const useMostPopularPetsHandler = () => {
  return useQuery(["mostPopularPets"], mostPopularPetsHandler)
}

export const useNewestPetsHandler = () => {
  return useQuery(["newestPets"], newestPetsHandler)
}

export const useCreateNewPethandler = () => {
  return useMutation(createNewPetHandler)
}
