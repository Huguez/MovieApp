import { useEffect, useState } from "react";
import { MovieEntity } from "../infrastructure/entities"
import * as UsesCases from "../core/use-cases"
import { MovieAdapter } from "../config";

type Movies = MovieEntity[];

let pagePopular = 1;
let pageUpcoming = 1;
let pageTopRated = 1;

function removeDuplicates( arr: MovieEntity[] ) {
   const aux: MovieEntity[] = []

   arr.forEach( ( movie: MovieEntity ) => {
      if(!aux.find( (m) => m.id === movie.id )){
         aux.push( movie );
      }
   } )

   return aux
}

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
            UsesCases.moviesPopular( MovieAdapter, {} ),
            UsesCases.moviesTopRated( MovieAdapter, {} ),
            UsesCases.moviesUpcoming( MovieAdapter, {} )
         ] )
         
         setNowPlayings( array1 )
         setPopular( array2 )
         setTopRated( array3 )
         setUpcoming( array4 )

         setIsLoading( false )
      }

      const upcomingNextPage = async () => {
         pageUpcoming++;
         const upcomingMoviesAux = await UsesCases.moviesUpcoming( MovieAdapter, { page: pageUpcoming } )
         setUpcoming( prev => [ ...removeDuplicates( [...prev, ...upcomingMoviesAux] ) ] )
      }

      const popularNextPage = async () => {
         pagePopular++;
         const popularMoviesAux = await UsesCases.moviesPopular( MovieAdapter, { page: pagePopular }  )
         setPopular( prev => [...removeDuplicates( [...prev, ...popularMoviesAux ] )] )
      }

      const topRatedNextPage = async () => {
         pageTopRated++;
         const topRatedAux = await UsesCases.moviesTopRated( MovieAdapter, { page: pageTopRated } )
         setTopRated( prev => [  ...removeDuplicates([ ...prev, ...topRatedAux ]) ] );
      }

      useEffect( () => {
         initialLoad();
      }, [] )

      return { 
         isLoading, nowPlayings, popular, topRated, upcoming, 
         popularNextPage, upcomingNextPage, topRatedNextPage
      }
      
   } catch (error) {
      throw new Error(" Error in useMovies.")
   }
}