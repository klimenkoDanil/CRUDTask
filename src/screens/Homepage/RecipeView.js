import React, {useState, useEffect } from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, FlatList, StyleSheet, StatusBar, ToastAndroid, Alert} from 'react-native';
import { Recipe } from './Recipe';
import { AddRecipeModal } from './AddRecipeModal';
import AsyncStorage from "@react-native-async-storage/async-storage";

const RecipeView = ({ navigation }) => {
  const [recipe, setRecipe] = useState([])
  const [isLoading, setIsLoading] = useState([true])

  const loadScene = (recipeDetail) => {
    navigation.navigate('Details', recipeDetail)
  }

  //AsyncStorage
  useEffect(() => {
    retrieveData("recipeData");
  }, []);

  storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      Alert.alert('ErrorSetData ' + error)
    }
  };
  
  retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        AsyncStorage.clear();
        setRecipe(JSON.parse(value));
      }
    } catch (error) {
      Alert.alert('ErrorFetchingData')
    }
    setIsLoading(false)
  };

  //Add,Remove methods
  const addRecipe = (title, components, imageUri) => {
    setRecipe(prevRecipe => {
      const updateRecipe = [
        ...prevRecipe,
        {
          uri: imageUri,
          id: title+'Key',
          title,
          components
        }
      ] 
      storeData("recipeData", updateRecipe);
      return updateRecipe
    })
  }

  const removeRecipe = (id) => {
    Alert.alert('Delete', 'Are you sure?', [
      {
        text: 'Ok',
        onPress: () => setRecipe(prev => prev.filter(item => item.id !== id))
      },
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: () => null,
      }
    ]);
    // setRecipe(prev => prev.filter(item => item.id !== id))
  }

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonOpen} onPress={() => {retrieveData("recipeData")}}></TouchableOpacity>
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
  },
  buttonOpen: {
    borderRadius: 20,
    borderWidth: 3,
    backgroundColor: "#fff",
    marginRight: 250,
    marginBottom: 10
  },
})

export default RecipeView;
