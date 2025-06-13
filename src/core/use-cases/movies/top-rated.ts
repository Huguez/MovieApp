import { HttpAdapter } from "../../../config";
import { MovieEntity } from "../../../infrastructure/entities";
import { MovieMapper } from "../../../infrastructure/mappers";
import { MoviesResponse } from "../../../infrastructure/types/movies/MoviesResponse";

interface options {
   page?: number;
   limit?: number;
}

export const moviesTopRated = async ( fetcher: HttpAdapter, { page = 1, limit = 20 }: options ): Promise<MovieEntity[]> => {
   try {
      const topRated = await fetcher.get<MoviesResponse>( `/top_rated`, {
         params: {
            page,
            limit
         }
      } )
      
      const aux: MovieEntity[] = [ ...topRated.results.map( MovieMapper.fromMovieToEntity ) ]

      return aux;

   } catch (error) {
      throw new Error("Error in MoviesTopRated");
   }
}