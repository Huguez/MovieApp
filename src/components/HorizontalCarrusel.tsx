import { Text, useWindowDimensions, View } from "react-native";
import { MovieEntity } from "../infrastructure/entities"
import { globalStyles } from "../theme";
import { FlatList } from "react-native-gesture-handler";
import { MoviePoster } from "./MoviePoster";

interface props {
   movies: MovieEntity[];
   title?: string
}

export const HorizontalCarrusel = ( { title, movies }: props ) => {
   const { width, height } = useWindowDimensions()

   const renderItem = ({ item }: {item: MovieEntity }) => <MoviePoster width={width/3.5} height={width/3.5} movie={ item } />

   return (
      <View style={{ marginTop: 5, marginLeft: 5, height: height*(2/10) }}>
         { title && <Text style={ globalStyles.titleCarrusel } >{ title }</Text> }
         
         <FlatList 
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
            data={ movies }
            renderItem={ renderItem }
            keyExtractor={ item => item.id.toString() }
         />

      </View>
   )
}
