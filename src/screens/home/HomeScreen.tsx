import { Text, useWindowDimensions, View } from "react-native"
import { PosterCarrusel, SafeAreaWrap } from "../../components"
import { useMovies } from "../../hooks"
import { ScrollView } from "react-native-gesture-handler"

export const HomeScreen = () => {
   const { isLoading, nowPlayings, upcoming, topRated, popular } = useMovies()
   const { height } = useWindowDimensions()

   // console.log( isLoading );
   // console.log( upcoming );
   // console.log( topRated );
   // console.log( popular );
   
   return (
      <SafeAreaWrap>
         <ScrollView>
            <PosterCarrusel height={ (height / 3) + 10 } movies={ nowPlayings } />
         </ScrollView>
      </SafeAreaWrap>
   )
}
