import React, {useState, useEffect } from 'react';
import { StyleSheet }from 'react-native';
import Navigate from './src/navigation';
import RecipeView from './src/RecipeView';

const App = () => {
  return (
    <Navigate/>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15
  }
})

export default App;
