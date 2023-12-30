import React, { FunctionComponent, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AnDrawer from './AnDrawer';
import AboutUsScreen from '../screens/AboutUsScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import AuthContext from '../containers/AuthContext';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

interface AuthStackProps {}

const AuthStack: FunctionComponent<AuthStackProps> = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (isLogged: boolean) => {
    setIsLoggedIn(isLogged);
  };

  const authContext = React.useMemo(
    () => ({
      signIn: () => handleLogin(true),
      signOut: () => handleLogin(false),
      signUp: () => handleLogin(true),
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              component={AnDrawer}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegistrationScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
          </>
        )}
        <Stack.Group navigationKey={isLoggedIn ? 'user' : 'guest'}>
          <Stack.Screen name="AboutUs" component={AboutUsScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </AuthContext.Provider>
  );
};

export default AuthStack;
