import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { AddRecipeModal } from './AddRecipeModal';
import * as COLOR from '../../constants/colors'


const AddFood = () => {

  return (
      <View style={styles.container}>
        <AddRecipeModal />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: -20,
    marginVertical: -10,
    backgroundColor: COLOR.DARK_BLUE,
    height: 800
  },
});

export default AddFood;