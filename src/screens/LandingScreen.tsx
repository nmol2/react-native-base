import React, { FunctionComponent } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface LandingScreenProps {
  navigation: any;
}

const LandingScreen: FunctionComponent<LandingScreenProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView>
      <Text>LandingScreen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height: metrics.screenHeight,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LandingScreen;
