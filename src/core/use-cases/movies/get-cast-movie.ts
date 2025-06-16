import { HttpAdapter } from "../../../config"
import type { Cast, CastResponse } from "../../../infrastructure/types";

interface options {
   id: number;
}

const notFound = "https://c8.alamy.com/comp/2NC6CRD/faceless-male-silhouette-vector-empty-state-avatar-icon-2NC6CRD.jpg"

export const MovieCastbyId = async ( fetcher: HttpAdapter, { id }:options ): Promise<Cast[]> => {
   try {
      const castResponse = await fetcher.get<CastResponse>( `/${ id }/credits`,  )

      return castResponse.cast.map( ( c: Cast ) => ({ 
         ...c, 
         profile_path: !!c.profile_path? `https://image.tmdb.org/t/p/w500${ c.profile_path  }` : notFound
      }) )
      
   } catch (error) {
      throw new Error("Error in MovieCastbyId")
   }
}