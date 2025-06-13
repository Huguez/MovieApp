import { useEffect, useState } from "react"
import { MovieEntity } from "../infrastructure/entities"
import * as UsesCases from "../core/use-cases"
import { MovieAdapter } from "../config"

export const useMovieById = ( id: number ) => {
   try {
      const [ isLoading, setIsLoading ] = useState<boolean>( true )
      const [ movie, setMovie ] = useState<MovieEntity>()

      const initialLoad = async () => {
         setIsLoading( true );
         const aux = await UsesCases.MovieById( MovieAdapter, { id } )
         setMovie( aux );
         setIsLoading( false );
      }

      useEffect(() => {
         initialLoad();
      }, [] )

      return {
         isLoading,
         movie,
      }
   } catch (error) {
      throw new Error(" Error in useMovieById.")
   }
}
