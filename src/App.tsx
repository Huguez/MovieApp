import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationStack } from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

enableScreens();

function App(): React.JSX.Element {

   return (
      <SafeAreaProvider>
         <NavigationContainer>
            <NavigationStack />
         </NavigationContainer>
      </SafeAreaProvider>
   );
}

export default App;
