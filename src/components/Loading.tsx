import { ActivityIndicator, View } from "react-native"
import { globalColors } from "../theme"

export const Loading = () => {
   return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
         <ActivityIndicator size={ 80 } color={ globalColors.primary } />
      </View>
   )
}
