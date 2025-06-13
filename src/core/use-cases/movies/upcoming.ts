import { HttpAdapter } from "../../../config";
import { MovieEntity } from "../../../infrastructure/entities";
import { MovieMapper } from "../../../infrastructure/mappers";
import { MovieResponse } from "../../../infrastructure/types";

interface options {
   page?: number;
   limit?: number;
}

export const moviesUpcoming = async ( fetcher: HttpAdapter, { page = 1, limit = 20 }: options ): Promise<MovieEntity[]> => {
   try {
      const upcoming = await fetcher.get<MovieResponse>( `/upcoming`, {
         params: {
            page, limit,
         }
      } )
      
      const aux: MovieEntity[] = [ ...upcoming.results.map( MovieMapper.fromMovieToEntity ) ]

      return aux;

   } catch (error) {
      throw new Error("Error in MoviesUpcoming");
   }
}