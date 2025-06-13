import { HttpAdapter } from "../../../config";
import { MovieEntity } from "../../../infrastructure/entities";
import { MovieMapper } from "../../../infrastructure/mappers";
import { Movie } from "../../../infrastructure/types";

interface options {
   id: number;
}

export const MovieById = async ( fetcher: HttpAdapter, { id }:options ): Promise<MovieEntity> => {
   try {
      const movie = await fetcher.get<Movie>( `/${ id }`,  )

      return MovieMapper.fromMovieToEntity( movie );
      
   } catch (error) {
      throw new Error("Error in MovieById")
   }
}