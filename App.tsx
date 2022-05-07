import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import MealsNavigator from './navigation/MealsNavigator';
// import FavoritesContextProvider from './store/context/favorites-context';
import {store} from './store/redux/store';

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider>
        {/* <FavoritesContextProvider> */}
        <Provider store={store}>
          <MealsNavigator />
        </Provider>
        {/* </FavoritesContextProvider> */}
      </SafeAreaProvider>
    </>
  );
};

export default App;
