import { Image, Pressable, StyleSheet, useWindowDimensions, View } from "react-native"
import { MovieEntity } from "../infrastructure/entities"
import { type NavigationProp, useNavigation } from "@react-navigation/native";
import { type RootStackParam } from "../infrastructure/types";

interface props {
   movie: MovieEntity;
}

export const MoviePoster = ( { movie }: props ) => {
   const { width, height } = useWindowDimensions()
   const navigation = useNavigation<NavigationProp<RootStackParam>>()

   const handleClick = ( id: number ) => navigation.navigate( "Details", { movieId: id } )

   return (
      <Pressable
         onPress={ () => handleClick( movie.id ) }
         style={ ({pressed}) => ({ opacity: pressed ? 0.85 : 1 }   ) }
      >
         <View style={ [ styles.imageWrap, { width: width / 2, height: height / 3 } ] }>
            <Image
               style={ styles.image }
               source={{
                  uri: movie.poster
               }}
               />
         </View>
      </Pressable>
   )
}

const styles = StyleSheet.create({
   image: {
      flex: 1,
      objectFit: 'contain',
      borderRadius: 20,
   },
   imageWrap: {
      flex: 1,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 7,
      elevation: 9,
      marginLeft: 10
   }
})
