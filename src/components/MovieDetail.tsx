import { StyleSheet, View } from "react-native";
import { ScrollView, Text } from "react-native-gesture-handler";
import { FullMovie } from "../infrastructure/types";
import { Formatter } from "../config";

interface props {
   movie: FullMovie;
}

export const MovieDetail = ( { movie }: props ) => {
   
   return (
      <View style={{ marginHorizontal: 20 }}>
         <View style={{ flexDirection: 'column', marginTop: 10 }}>
            <Text style={ styles.topic }> Popularity: <Text style={ styles.answer }> { movie.rating } </Text></Text>
            <Text style={ styles.topic }> Average:    <Text style={ styles.answer }> { movie.vote_average } </Text></Text>
            <Text style={ styles.topic }> Votes:      <Text style={ styles.answer }> { movie.vote_count } </Text>  </Text>
            <Text style={ styles.topic }> Budget:     <Text style={ styles.answer }> { Formatter.currency( movie.budget ?? 0 )  } </Text> </Text>
         </View>
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
   }
} )