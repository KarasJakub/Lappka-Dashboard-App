import { useQuery } from "@tanstack/react-query"
import { shelterDataHandler } from "./shelter"

export const useShelterStatsHandler = () => {
  return useQuery(["shelterStats"], shelterDataHandler)
}
