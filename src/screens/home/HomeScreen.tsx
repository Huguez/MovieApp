import { HorizontalCarrusel, PosterCarrusel, SafeAreaWrap } from "../../components"
import { useMovies } from "../../hooks"
import { ScrollView } from "react-native-gesture-handler"

export const HomeScreen = () => {
   const { isLoading, nowPlayings, upcoming, topRated, popular } = useMovies()
   
   return (
      <SafeAreaWrap>
         <ScrollView>
            <PosterCarrusel movies={ nowPlayings } />

            <HorizontalCarrusel title={ "Upcoming" } movies={ upcoming } />

            <HorizontalCarrusel title={ "Top Rated" } movies={ topRated } />
            
            <HorizontalCarrusel title={ "Most Popular" } movies={ popular } />
         </ScrollView>
      </SafeAreaWrap>
   )
}
