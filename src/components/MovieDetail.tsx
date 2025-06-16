import { StyleSheet, useWindowDimensions, View } from "react-native";
import { Text } from "react-native-gesture-handler";
import type { FullMovie, Cast } from "../infrastructure/types";
import { Formatter } from "../config";
import { CastCarrusel } from ".";

interface props {
   movie: FullMovie;
   cast: Cast[];
}

export const MovieDetail = ( { movie, cast }: props ) => {
   
   const { width } = useWindowDimensions()

   return (
      <View style={{ marginHorizontal: 20 }}>
         <View style={{ flexDirection: 'column', marginTop: 10 }}>
            <Text style={ styles.topic }> Popularity: <Text style={ styles.answer }> { movie.rating } </Text></Text>
            <Text style={ styles.topic }> Average:    <Text style={ styles.answer }> { movie.vote_average } </Text></Text>
            <Text style={ styles.topic }> Votes:      <Text style={ styles.answer }> { movie.vote_count } </Text>  </Text>
            <Text style={ styles.topic }> Budget:     <Text style={ styles.answer }> { Formatter.currency( movie.budget ?? 0 )  } </Text> </Text>
         </View>
         <CastCarrusel actors={ cast } size={ width / 3 } />
      </View>
   )
}

const styles = StyleSheet.create( {
   topic: {
      fontSize: 20,
      marginTop: 5,
      fontWeight: 'bold',
   },
   answer: {
      fontWeight: 'normal',
   },
   image: {
      flex: 1,
      objectFit: 'cover',
      borderRadius: 20,
      width: 'auto',
   },
   imageWrap: {
      flex: 1,
      borderRadius: 20,
      marginLeft: 15,
   }
} )