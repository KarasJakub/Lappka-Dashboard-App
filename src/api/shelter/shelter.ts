import { ShelterStatsTypes } from "mocks/handlers/shelterStatsHandler"
import {  mockClient } from "api/client"

export const shelterDataHandler = async () => {
    try {
      const response = await mockClient.get<ShelterStatsTypes>('/shelters/stats')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }