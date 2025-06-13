import { NativeScrollEvent, NativeSyntheticEvent, Text, useWindowDimensions, View } from "react-native";
import { MovieEntity } from "../infrastructure/entities"
import { globalStyles } from "../theme";
import { FlatList } from "react-native-gesture-handler";
import { MoviePoster } from "./MoviePoster";
import { useEffect, useRef } from "react";

interface props {
   movies: MovieEntity[];
   title?: string
   loadNextMovies?: () => Promise<void> | undefined;
}

export const HorizontalCarrusel = ( { title, movies, loadNextMovies }: props ) => {

   const isLoading = useRef( false );

   useEffect( () => {
      isLoading.current = false;
   }, [ movies ])

   const { width, height } = useWindowDimensions()

   const renderItem = ({ item }: {item: MovieEntity }) => <MoviePoster width={width/3.5} height={width/3.5} movie={ item } />

   const handleScroll = async ( e: NativeSyntheticEvent<NativeScrollEvent> ) => {

      if ( isLoading.current ) {
         return;
      }

      const { contentOffset, layoutMeasurement, contentSize } = e.nativeEvent;
      const isEndReached = ( contentOffset.x + layoutMeasurement.width + 600 ) >= contentSize.width

      if ( !isEndReached ) {
         return;
      }

      isLoading.current = true;
      
      loadNextMovies && await loadNextMovies()
   }

   return (
      <View style={{ marginTop: 5, marginLeft: 5, height: height*(2/10) }}>
         { title && <Text style={ globalStyles.titleCarrusel } >{ title }</Text> }
         
         <FlatList 
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
            data={ movies }
            renderItem={ renderItem }
            keyExtractor={ item => item.id.toString() }
            onScroll={ handleScroll }
         />

      </View>
   )
}
