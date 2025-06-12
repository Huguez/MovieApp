import { HttpAdapter } from "../../../config";
import { MovieEntity } from "../../entities";
import { Movie, NowPlayingResponse } from "../../types";

export const moviesNowPlaying = async ( fetcher: HttpAdapter ): Promise<MovieEntity[]> => {
   try {
      const nowPlaying = await fetcher.get<NowPlayingResponse>( `/movie/now_playing` )

      const aux: MovieEntity[] = [ 
         ...nowPlaying.results.map( (movie: Movie) => ({ 
            ...movie, 
            rating: movie.popularity,
            description: movie.overview,
            poster: movie.poster_path,
            backdrop: movie.backdrop_path
           }) )
       ]

      return aux;

   } catch (error) {
      throw new Error("Error in MoviesNowPlaying");
   }
}