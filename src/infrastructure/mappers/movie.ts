import { MovieEntity } from "../entities";
import type { Movie } from "../types";

export class MovieMapper {

   static fromMovieToEntity( result: Movie ): MovieEntity {
      return {
         id: result.id,
         title: result.title,
         description: result.overview,
         release_date: result.release_date,
         rating: result.popularity,
         poster: `https://image.tmdb.org/t/p/w500${ result.poster_path }` ,
         backdrop: `https://image.tmdb.org/t/p/w500${ result.backdrop_path }`,
         vote_average: result.vote_average,
         vote_count: result.vote_count,
      }
   }

}