import { HttpAdapter } from "../../../config";
import { MovieEntity } from "../../../infrastructure/entities";
import { MovieMapper } from "../../../infrastructure/mappers";
import { MoviesResponse } from "../../../infrastructure/types";

interface options {
   page?:  number;
   limit?: number;
}

export const moviesPopular = async ( fetcher: HttpAdapter, { page = 1, limit = 20 }: options ): Promise<MovieEntity[]> => {
   try {
      const populars = await fetcher.get<MoviesResponse>( `/popular`, {
         params: {
            page,
            limit
         }
      } )
      
      const aux: MovieEntity[] = [ ...populars.results.map( MovieMapper.fromMovieToEntity ) ]

      return aux;

   } catch (error) {
      throw new Error("Error in MoviesPopular");
   }
}