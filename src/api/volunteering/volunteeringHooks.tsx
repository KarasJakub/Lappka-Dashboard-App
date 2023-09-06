import { useQuery } from "@tanstack/react-query"
import { volunteringStatsHandler } from "./volunteering"

export const useVolunteeringStatsHandler = () => {
  return useQuery(["volunteeringStats"], volunteringStatsHandler)
}
