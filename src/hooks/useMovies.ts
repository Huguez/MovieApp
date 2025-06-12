import { useEffect, useState } from "react";
import { MovieEntity } from "../core/entities"
import * as UsesCases from "../core/use-cases"
import { MovieAdapter } from "../config";

type Movies = MovieEntity[];

export const useMovies = () => {
   try {
      const [ isLoading, setIsLoading ] = useState<boolean>( true )
      const [ nowPlayings, setNowPlayings ] = useState<Movies>( [] )

      const initialLoad = async () => {
         setIsLoading( true )
         const aux = await UsesCases.moviesNowPlaying( MovieAdapter )
         setNowPlayings( aux )
         setIsLoading( false )
         
      }

      useEffect( () => {
         initialLoad();
      }, [] )

      return { isLoading, nowPlayings }
   } catch (error) {
      throw new Error(" Error in useMovies.")
   }
}