import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { MovieEntity } from '../infrastructure/entities';
import { MoviePoster } from './MoviePoster';

interface props {
   movies: MovieEntity[];
   height: number;
}

export const PosterCarrusel = ( { height, movies = [] }: props ) => {
   return (
      <View style={ { height, } }>
         <ScrollView
            horizontal
            showsHorizontalScrollIndicator={ false }
         >
            {
               movies.map( ( movie: MovieEntity ) => 
                  <MoviePoster
                     key={ movie.id } 
                     movie={ movie }
                  />
               )
            }
         </ScrollView>
      </View>      
   )
}
