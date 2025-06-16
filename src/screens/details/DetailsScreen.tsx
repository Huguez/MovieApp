import { Loading, MovieDetail, MovieHeader, SafeAreaWrap } from "../../components"
import { RootStackParam } from "../../infrastructure/types"
import { StackScreenProps } from "@react-navigation/stack"
import { useMovieById } from "../../hooks"
import { ScrollView } from "react-native-gesture-handler"

interface Props extends StackScreenProps<RootStackParam, 'Details'> {}

export const DetailsScreen = ( { route } :Props) => {

   const { movieId } = route.params
   
   const { isLoading, movie, cast } = useMovieById( movieId )

   if ( isLoading || !movie ) {
      return <Loading /> 
   }

   return (
      <SafeAreaWrap>
         <ScrollView>
            <MovieHeader movie={ movie } />
            <MovieDetail movie={ movie } cast={ cast } />
         </ScrollView>
      </SafeAreaWrap>
   )
}