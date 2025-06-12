import { ReactElement, ReactNode } from "react";
import { View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface props {
   children: ReactNode | ReactElement;
}


export const WrapApp = ( { children }: props ) => {
   const { top, bottom } = useSafeAreaInsets();
   return (
      <View style={ { marginTop: top, marginBottom: bottom, } }>
         { children }
      </View>
   )
}
