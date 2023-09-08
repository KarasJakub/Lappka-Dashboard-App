import { useQuery, useMutation } from "@tanstack/react-query"
import { shelterDataHandler } from "api/shelter/shelter"
import {
  mostPopularPetsHandler,
  newestPetsHandler,
  createNewPetHandler,
  getImagesId,
  getImagesUrl,
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

export const useGetImagesId = () => {
  return useMutation(getImagesId)
}

export const useGetImagesUrl = () => {
  return useMutation(getImagesUrl)
}

export const useCreateNewPetHandler = () => {
  return useMutation(createNewPetHandler)
}
