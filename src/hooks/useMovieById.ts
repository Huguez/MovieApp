import { useEffect, useState } from "react"
import * as UsesCases from "../core/use-cases"
import { MovieAdapter } from "../config"
import type { Cast, FullMovie } from "../infrastructure/types"

export const useMovieById = ( id: number ) => {
   try {
      const [ isLoading, setIsLoading ] = useState<boolean>( true )
      const [ movie, setMovie ] = useState<FullMovie>()
      const [ cast, setCast ] = useState<Cast[]>( [] )

      const initialLoad = async () => {
         setIsLoading( true );
         
         const [ movieAux, castAux ] = await Promise.all( [
            UsesCases.MovieById( MovieAdapter, { id } ),
            UsesCases.MovieCastbyId( MovieAdapter, { id } )
         ] )
         setMovie( movieAux );
         setCast( castAux );
         setIsLoading( false );
      }

      useEffect(() => {
         initialLoad();
      }, [] )

      return {
         isLoading,
         movie,
         cast
      }
   } catch (error) {
      throw new Error(" Error in useMovieById.")
   }
}
