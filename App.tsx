import Signin from './src/loginPage';
import SignUp from './src/signUpPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/component/home';
import AddNoteText from './src/component/addNoteText';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signin">
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="addnotetext"
          options={{
            headerShown: false,
          }}
          component={AddNoteText}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
