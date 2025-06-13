import { ActivityIndicator, Text, View } from "react-native"
import { MovieHeader, SafeAreaWrap } from "../../components"
import { RootStackParam } from "../../infrastructure/types"
import { StackScreenProps } from "@react-navigation/stack"
import { useMovieById } from "../../hooks"

interface Props extends StackScreenProps<RootStackParam, 'Details'> {}

export const DetailsScreen = ( { route } :Props) => {

   const { movieId } = route.params
   
   const { isLoading, movie } = useMovieById( movieId )

   if ( isLoading || !movie ) {
      return <View style={{ flex: 1, justifyContent: 'center' }}>
         <ActivityIndicator size={'large'} />
      </View> 
   }


   return (
      <SafeAreaWrap>
         <MovieHeader movie={ movie } />
      </SafeAreaWrap>
   )
}