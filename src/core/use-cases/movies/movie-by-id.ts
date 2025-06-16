import { HttpAdapter } from "../../../config";
import { MovieMapper } from "../../../infrastructure/mappers";
import type { FullMovie, Movie } from "../../../infrastructure/types";

interface options {
   id: number;
}

export const MovieById = async ( fetcher: HttpAdapter, { id }:options ): Promise<FullMovie> => {
   try {
      const movie = await fetcher.get<Movie>( `/${ id }`,  )

      return MovieMapper.fromMovieToFullMovie( movie ) ;
      
   } catch (error) {
      throw new Error("Error in MovieById")
   }
}