import { useEffect, useState } from "react";
import { MovieEntity } from "../infrastructure/entities"
import * as UsesCases from "../core/use-cases"
import { MovieAdapter } from "../config";

type Movies = MovieEntity[];

export const useMovies = () => {
   try {
      const [ isLoading, setIsLoading ] = useState<boolean>( true )

      const [ nowPlayings, setNowPlayings ] = useState<Movies>( [] )
      const [ popular, setPopular ] = useState<Movies>( [] )
      const [ topRated, setTopRated ] = useState<Movies>( [] )
      const [ upcoming, setUpcoming ] = useState<Movies>( [] )


      const initialLoad = async () => {
         setIsLoading( true )

         const [ array1, array2, array3, array4 ] = await  Promise.all( [
            UsesCases.moviesNowPlaying( MovieAdapter ),
            UsesCases.moviesPopular( MovieAdapter ),
            UsesCases.moviesTopRated( MovieAdapter ),
            UsesCases.moviesUpcoming( MovieAdapter )
         ] )
         
         setNowPlayings( array1 )
         setPopular( array2 )
         setTopRated( array3 )
         setUpcoming( array4 )

         setIsLoading( false )
      }

      useEffect( () => {
         initialLoad();
      }, [] )

      return { isLoading, nowPlayings, popular, topRated, upcoming, }
      
   } catch (error) {
      throw new Error(" Error in useMovies.")
   }
}