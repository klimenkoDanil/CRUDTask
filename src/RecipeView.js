import React, {useState, useEffect } from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, FlatList, StyleSheet, StatusBar, ToastAndroid, Alert} from 'react-native';
import { Recipe } from './Recipe';
import { storeData, retrieveData } from './DataStorage'
import { AddRecipeModal } from './AddRecipeModal';


const RecipeView = ({ navigation }) => {
  const [recipe, setRecipe] = useState([])
  
  const loadScene = ( recipeData ) => {
    navigation.navigate('Details', recipeData);
  }

  const addRecipe = (title, components, imageUri) => {
    setRecipe(prevRecipe => [
      ...prevRecipe,
      {
        uri: imageUri,
        id: title+'Key',
        title,
        components
      }
    ])
  }

  const removeRecipe = (id) => {
    setRecipe(prev => prev.filter(item => item.id !== id))
  }

  return (
    <View>
      <View style={styles.container}>
        <AddRecipeModal onSubmit={addRecipe}></AddRecipeModal>

        <FlatList 
          keyExtractor={item => item.id}
          data={recipe}
          renderItem={({item}) => (
            <Recipe item = {item} onRemove={removeRecipe} onOpenRecipe = {loadScene}></Recipe>
          )}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15
  }
})

export default RecipeView;
