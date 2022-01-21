import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {storeData} from '../../utils/DataStorage';
import { foodCategory, foodKey, foodDeleteActions } from '../../utils/category';
import * as COLOR from '../../constants/colors'

export const Food = ({item, onOpenRecipe}) => {
  const selectedCategory = foodCategory(item.category)
  const dataKey = foodKey(item.category)
  const deleteAction = foodDeleteActions(item.category)
  
  const dispatch = useDispatch();

  const deleteFood = () => {
    Alert.alert('Delete', 'Are you sure?', [
      {
        text: 'Ok',
        onPress: () => {
          dispatch(deleteAction(item.id));
          storeData(
            dataKey,
            [...selectedCategory].filter(foodItem => foodItem.id !== item.id),
          );
        },
      },
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: () => null,
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onOpenRecipe.bind(null, item)}
        onLongPress={deleteFood}>
        <View style={styles.food}>
          <Image style={styles.image} source={{uri: item.uri}}></Image>
          <Text style={styles.title}> {item.title} </Text>
        </View>
        <View style={styles.categoryBlock}>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.LIGHT_BLUE,
    marginTop: 5,
    marginLeft: 7,
    marginBottom: 15,
    borderRadius: 25,
    shadowColor: '#6b9cc9',
    shadowOffset: {
      width: -5,
      height: -5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
  },
  food: {
    flex: 1,
    borderBottomColor: COLOR.DARK_BLUE,
    borderBottomWidth: 2,
    flexDirection: 'row',
    padding: 15,
    borderRadius: 5,
  },
  image: {
    borderRadius: 20,
    width: 150,
    height: 150,
  },
  title: {
    marginLeft: 15,
    fontSize: 25,
    marginRight: 155,
    color: "#f0f2b1",
    shadowColor: 'black',
    shadowOffset: {
      width: -6,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  categoryBlock: {
    borderBottomLeftRadius : 25,
    borderBottomRightRadius: 25,
    flexDirection: 'row',
    height: 35,
    backgroundColor: 'white',
  },
  text: {},
});
