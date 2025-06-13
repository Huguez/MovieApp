import { HttpAdapter } from "../../../config";
import { MovieEntity } from "../../../infrastructure/entities";
import { MovieMapper } from "../../../infrastructure/mappers";
import { MoviesResponse } from "../../../infrastructure/types";

export const moviesNowPlaying = async ( fetcher: HttpAdapter ): Promise<MovieEntity[]> => {
   try {
      const nowPlaying = await fetcher.get<MoviesResponse>( `/now_playing` )
      
      const aux: MovieEntity[] = [ ...nowPlaying.results.map( MovieMapper.fromMovieToEntity ) ]

      return aux;

   } catch (error) {
      throw new Error("Error in MoviesNowPlaying");
   }
}