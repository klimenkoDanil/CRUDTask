import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const RecipeHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recipes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    height: 70,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  text : {
    fontSize: 25,
    color: '#fff',
    marginBottom: 5
  }
});