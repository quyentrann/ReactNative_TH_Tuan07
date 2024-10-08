import { Text, SafeAreaView, StyleSheet } from 'react-native';
import screen1 from './screen/screen1'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screen2 from './screen/screen2';
import screen3 from './screen/screen3'
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={screen1} />
        <Stack.Screen name="Home" component={screen2} />
        <Stack.Screen name="AddNote" component={screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;