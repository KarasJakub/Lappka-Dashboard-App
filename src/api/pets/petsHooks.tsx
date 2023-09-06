import { useQuery } from "@tanstack/react-query"
import { shelterDataHandler } from "api/shelter/shelter"
import { mostPopularPetsHandler, newestPetsHandler } from "./pets"

export const useShelterStatsHandler = () => {
  return useQuery(["shelterStats"], shelterDataHandler)
}

export const useMostPopularPetsHandler = () => {
  return useQuery(["mostPopularPets"], mostPopularPetsHandler)
}

export const useNewestPetsHandler = () => {
  return useQuery(["newestPets"], newestPetsHandler)
}
