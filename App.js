import { ForgotPassword } from './screen/Authentication';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './plugin/storeyahi';
import { Provider } from 'react-redux';
import { Registrain } from './screen/Authentication';



export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Registrain" component={Registrain}></Stack.Screen>
          <Stack.Screen options={{ headerShown: false ,customAnimationOnGesture:true,animation:"slide_from_right"} }  name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}