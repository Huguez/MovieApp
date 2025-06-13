import { HorizontalCarrusel, PosterCarrusel, SafeAreaWrap } from "../../components"
import { useMovies } from "../../hooks"
import { ScrollView } from "react-native-gesture-handler"

export const HomeScreen = () => {
   const { 
      nowPlayings, upcoming, topRated, popular,
      popularNextPage, upcomingNextPage, topRatedNextPage
    } = useMovies()
   
   return (
      <SafeAreaWrap>
         <ScrollView>
            <PosterCarrusel movies={ nowPlayings } />

            <HorizontalCarrusel title={ "Upcoming" } movies={ upcoming } loadNextMovies={ upcomingNextPage } />

            <HorizontalCarrusel title={ "Top Rated" } movies={ topRated } loadNextMovies={ topRatedNextPage } />
            
            <HorizontalCarrusel title={ "Most Popular" } movies={ popular } loadNextMovies={ popularNextPage } />
         </ScrollView>
      </SafeAreaWrap>
   )
}
