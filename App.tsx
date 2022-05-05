import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MealsNavigator from './navigation/MealsNavigator';

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider>
        <MealsNavigator />
      </SafeAreaProvider>
    </>
  );
};

export default App;
