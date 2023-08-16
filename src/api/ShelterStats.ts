import axios from "axios";
import {ShelterStatsTypes} from "mocks/handlers/ShelterStats"

export function GetCards() {
    return axios("/cards").then(res => res.data)
}

export const ShelterDataHandler = async () => {
    try {
        const response = await axios.get<ShelterStatsTypes>('/cards');
        return response.data;
    }   catch (error) {
        console.log(error);
      }
}