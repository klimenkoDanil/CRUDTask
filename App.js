import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Navigate from './src/navigation/navigation';
import {Provider} from 'react-redux';
import store, { persistor } from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';
import { LogBox } from 'react-native'


LogBox.ignoreAllLogs();

const App = () => (
  <Provider store={store}>
    <PersistGate 
      persistor={persistor}
      loading={null}
    >
      <Navigate />
    </PersistGate>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});

export default App;