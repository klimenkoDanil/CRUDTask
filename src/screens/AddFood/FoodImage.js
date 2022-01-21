import React, {useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {Picker} from '@react-native-picker/picker';

import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import * as COLOR from '../../constants/colors'

export const FoodImage = ({category, imageUri}) => {
  const noPhoto =
    'https://tl.rulate.ru/i/book/19/10/18925.jpg';
  const [fileUri, setFileUri] = useState(noPhoto);
  const [selectedCategory, setSelectedCategory] = useState('starters');
  category(selectedCategory)

  const chooseImage = () => {
    let options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('dsds', response?.assets?.[0]?.uri);
        setFileUri(response?.assets?.[0]?.uri);
      }
    });
  };

  const renderFileUri = () => {
    if (fileUri) {
      imageUri(fileUri);
      return <Image source={{uri: fileUri}} style={styles.images} />;
    } else {
      imageUri(fileUri);
      return <Image source={{uri: fileUri}} style={styles.images} />;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={chooseImage} style={styles.btnSection}>
        {renderFileUri()}
      </TouchableOpacity>
      <Picker
        itemStyle={styles.pickerText}
        style={styles.picker}
        selectedValue={selectedCategory}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedCategory(itemValue)
          category(itemValue)
        }
        }>
        <Picker.Item color={COLOR.GOLD} label="Starters" value="starters" />
        <Picker.Item label="Main Courses" value="mainCourses" />
        <Picker.Item label="Drinks" value="drinks" />
        <Picker.Item label="Snacks" value="snacks" />
        <Picker.Item label="Desserts" value="desserts" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    flexDirection: 'row',
  },
  images: {
    width: 170,
    height: 170,
    borderRadius: 20,
    marginTop: 25,
    marginHorizontal: 3,
    shadowColor: 'white',
    shadowOffset: {
      width: -5,
      height: -5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 1,
  },
  btnSection: {
    alignItems: 'center',
    marginStart: 10,
    width: 160,
    height: 170,
  },
  btnText: {
    fontSize: 10,
    color: '#000',
  },
  picker: {
    width: 160,
  },
  pickerText: {
    fontSize: 16,
    color: COLOR.GOLD
  }
});
