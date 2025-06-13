import { useWindowDimensions, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { MovieEntity } from '../infrastructure/entities';
import { MoviePoster } from './MoviePoster';

interface props {
   movies: MovieEntity[];
}

export const PosterCarrusel = ( { movies }: props ) => {
   const { width, height } = useWindowDimensions()
   
   return (
      <View style={ { height: height*(3/7), paddingVertical: 10 } }>
         <ScrollView
            horizontal
            showsHorizontalScrollIndicator={ false }
         >
            {
               movies.map( ( movie: MovieEntity ) => 
                  <MoviePoster
                     key={ movie.id } 
                     movie={ movie }
                     height={ height*(2/5) }
                     width={ width / 2 }
                  />
               )
            }
         </ScrollView>
      </View>      
   )
}
