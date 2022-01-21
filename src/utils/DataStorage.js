import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import * as actions from '../redux/actions'
import { useState } from 'react';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    Alert.alert('ErrorSetData', JSON.stringify(error))
  }
};

export const retrieveData = async (key) => {
  AsyncStorage.removeItem('recipeData')
  console.log('Trying get data', key)
  try {
    const value = await AsyncStorage.getItem(key);
    console.log(JSON.parse(value))
    return value ? JSON.parse(value) : [];
  } catch (error) {
    console.log('ErrorGetData', error);
  }
};
