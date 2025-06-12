import { AxiosAdapter } from "../http/axios.adapter";
import config from 'react-native-config';

const apiKey = config.MOVIE_KEY ?? ""
const baseUrl = config.BASE_URL ?? ""

export const MovieAdapter = new AxiosAdapter( {
   baseUrl: baseUrl,
   params: { 
      api_key: apiKey,
   },
} )