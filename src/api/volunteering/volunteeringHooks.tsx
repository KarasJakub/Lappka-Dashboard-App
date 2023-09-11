import { useMutation, useQuery } from "@tanstack/react-query"
import {
  volunteringStatsHandler,
  updateVolunteringHandler,
} from "./volunteering"

export const useVolunteeringStatsHandler = () => {
  return useQuery(["volunteeringStats"], volunteringStatsHandler)
}

export const useUpdateVolunteeringHandler = () => {
  return useMutation(updateVolunteringHandler)
}
