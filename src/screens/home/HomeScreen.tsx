import { Text } from "react-native"
import { SafeAreaWrap } from "../../components"
import { useMovies } from "../../hooks"

export const HomeScreen = () => {
   const { isLoading, nowPlayings, upcoming, topRated, popular } = useMovies()
   
   console.log( isLoading );
   console.log( nowPlayings );
   console.log( upcoming );
   console.log( topRated );
   console.log( popular );
   
   return (
      <SafeAreaWrap>
         <Text> HomeScreen </Text>
      </SafeAreaWrap>
   )
}
