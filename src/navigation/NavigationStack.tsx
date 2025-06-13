import { createStackNavigator } from "@react-navigation/stack"
import { HomeScreen } from "../screens"
import { SettingsNavigation, type RootStackParam } from "../infrastructure/types"
import { DetailsScreen } from "../screens/details/DetailsScreen"


const Stack = createStackNavigator<RootStackParam>()

export const NavigationStack = () => {

   const settings: SettingsNavigation = {
      headerShown: false,
   }

   return (
      <Stack.Navigator  screenOptions={ settings }  initialRouteName="Home" >
         <Stack.Screen name="Home" component={ HomeScreen } />
         <Stack.Screen name="Details" component={ DetailsScreen } />
      </Stack.Navigator>
   )
}
