import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WrapApp } from './components';
import { HomeScreen } from './screens';

function App(): React.JSX.Element {

   return (
      <SafeAreaProvider>
         <WrapApp>
            <HomeScreen />
         </WrapApp>
      </SafeAreaProvider>
   );
}

export default App;
