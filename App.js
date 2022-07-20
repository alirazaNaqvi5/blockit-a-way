import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import Login from './Screens/Login/Login';
import Home from './Screens/Home/Home';


function Splash({ navigation }) {
  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('login')
    }
    , 3000);
  },[])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{
          marginBottom: 40,
          width: '100%',
          height: '20%',
        }} source={require("./assets/log2.png")} />
      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text>Go to Main App</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>

    // <Login />


    <NavigationContainer>
      <Stack.Navigator screenOptions ={{
            headerShown: false,
          }}>
        <Stack.Screen name="splash" 
          
          component={Splash} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
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
