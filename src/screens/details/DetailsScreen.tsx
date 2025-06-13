import { Text } from "react-native"
import { SafeAreaWrap } from "../../components"
import { RootStackParam } from "../../infrastructure/types"
import { StackScreenProps } from "@react-navigation/stack"
import { useMovieById } from "../../hooks"

interface Props extends StackScreenProps<RootStackParam, 'Details'> {}

export const DetailsScreen = ( { route } :Props) => {

   const { movieId } = route.params
   
   const { isLoading,  movie } = useMovieById( movieId )
   
   !isLoading && console.log( movie );

   return (
      <SafeAreaWrap>
         <Text> DetailsScreen </Text>
      </SafeAreaWrap>
   )
}