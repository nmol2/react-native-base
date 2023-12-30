/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
// import { SafeAreaView, useColorScheme } from 'react-native';

// import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './src/navigation/AuthStack';
// import LandingScreen from './src/screens/LandingScreen';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name={'Landing'} component={LandingScreen} />
        <Stack.Screen name={'Auth'} component={AuthStack} />
      </Stack.Navigator> */}
      <AuthStack />
    </NavigationContainer>
  );
}

export default App;
