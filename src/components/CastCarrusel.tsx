import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import { type Cast } from "../infrastructure/types";

interface props {
   actors: Cast[];
   size: number;
}

export const CastCarrusel = ( { actors, size }: props ) => {

   const renderItem = ( { item } : { item: Cast }  ) => <>
      <View style={ [ styles.imageWrap, { width: size, height: size, } ]  }>
         <Image
            style={ styles.image }
            source={{
               uri: item.profile_path
            }}
         />
      </View>
   </>

   return <>
      <Text numberOfLines={1} style={ styles.title }> Cast:</Text>
      <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 30 }}>
         <FlatList 
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
            data={actors} 
            renderItem={renderItem}
            keyExtractor={ item => item.id.toString() }   
         />
      </View>
   </>
}

const styles = StyleSheet.create( {
   title: {
      fontSize: 20,
      marginTop: 5,
      fontWeight: 'bold',
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