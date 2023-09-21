import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import landingPage from './screens/landingPage'
import login from './screens/login'
import signUp from './screens/signUp'
import LoginSuccess from './screens/LoginSuccess'

const Stack = createNativeStackNavigator();



export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='landingPage'>
          <Stack.Screen name='landingPage' component={landingPage} options={{
            title : '',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerShadowVisible: false,

          }} />
          <Stack.Screen name='login' component={login} options={{
            title: '',
            headerShadowVisible: false,
          }} />
          <Stack.Screen name='signUp' component={signUp} options={{
            title: '',
            headerShadowVisible: false,
          }} />

        <Stack.Screen name='LoginSuccess' component={LoginSuccess} options={{
            title: '',
            headerShadowVisible: false,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
