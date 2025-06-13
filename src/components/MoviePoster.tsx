import { Image, Pressable, StyleSheet, useWindowDimensions, View } from "react-native"
import { MovieEntity } from "../infrastructure/entities"
import { type NavigationProp, useNavigation } from "@react-navigation/native";
import { type RootStackParam } from "../infrastructure/types";

interface props {
   movie: MovieEntity;
   height: number;
   width: number;
}

export const MoviePoster = ( { movie, height, width }: props ) => {
   

   const navigation = useNavigation<NavigationProp<RootStackParam>>()

   const handleClick = ( id: number ) => navigation.navigate( "Details", { movieId: id } )

   return (
      <Pressable
         onPress={ () => handleClick( movie.id ) }
         style={ ({pressed}) => ({ opacity: pressed ? 0.85 : 1, width, height } ) }
      >
         <View style={ styles.imageWrap  }>
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
      objectFit: 'cover',
      borderRadius: 20,
      width: 'auto',
   },
   imageWrap: {
      flex: 1,
      borderRadius: 20,
      marginLeft: 15,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
   }
})
