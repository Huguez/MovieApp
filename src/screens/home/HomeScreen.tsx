import { Text } from "react-native"
import { SafeAreaWrap } from "../../components"
import { useMovies } from "../../hooks"

export const HomeScreen = () => {
   const { isLoading, nowPlayings, } = useMovies()
   
   console.log( isLoading );
   console.log( nowPlayings );

   return (
      <SafeAreaWrap>
         <Text> HomeScreen </Text>
      </SafeAreaWrap>
   )
}
