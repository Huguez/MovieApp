import { HttpAdapter } from "../../../config";
import { MovieEntity } from "../../../infrastructure/entities";
import { MovieMapper } from "../../../infrastructure/mappers";
import { MovieResponse } from "../../../infrastructure/types";

export const moviesUpcoming = async ( fetcher: HttpAdapter ): Promise<MovieEntity[]> => {
   try {
      const nowPlaying = await fetcher.get<MovieResponse>( `/upcoming` )
      
      const aux: MovieEntity[] = [ ...nowPlaying.results.map( MovieMapper.fromMovieToEntity ) ]

      return aux;

   } catch (error) {
      throw new Error("Error in MoviesUpcoming");
   }
}