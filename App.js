// import React, {useState, useEffect } from 'react';
// import { StyleSheet }from 'react-native';
// import Navigate from './src/navigation/navigation';
// import RecipeView from './src/screens/Homepage/RecipeView';

// const App = () => {
//   return (
//     <Navigate/>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 20,
//     paddingVertical: 15
//   }
// })

// export default App;

import React from 'react';
import { LogBox } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import store, { persistor } from './src/redux';
import RootNavigator from './src/navigation';

LogBox.ignoreAllLogs();

const App = () => (
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={null}
    >
       <RootNavigator />
    </PersistGate>
  </Provider>
);
export default App;
