import { ReactElement, ReactNode } from "react";
import { View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface props {
   children: ReactNode | ReactElement;
}

export const SafeAreaWrap = ( { children }: props ) => {
   const { top, bottom, left, right } = useSafeAreaInsets();
   
   const myStyle = { 
      marginTop: top, 
      marginBottom: bottom, 
      marginLeft: left, 
      marginRight: right 
   }

   return (
      <View style={ myStyle }>   
         { children }
      </View>
   )
}
