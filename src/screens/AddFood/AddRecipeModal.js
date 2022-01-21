import React, {useState, useEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';
import {FoodImage} from './FoodImage';
import {useDispatch, useSelector} from 'react-redux';
import {storeData} from '../../utils/DataStorage';
import {foodCategory, foodKey, foodAddActions} from '../../utils/category';
import * as COLOR from '../../constants/colors';

export const AddRecipeModal = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState([]);
  const [titleRecipe, setTitleRecipe] = useState(['']);
  const [componentsRecipe, setComponentsRecipe] = useState(['']);
  const [imageUri, setImageUri] = useState(['']);
  const [categoryRecipe, setCategoryRecipe] = useState(['starters']);
  const selectedCategory = foodCategory(categoryRecipe);
  const dataKey = foodKey(categoryRecipe);
  const addActions = foodAddActions(categoryRecipe);

  const uriSetter = fileUri => {
    setImageUri(fileUri);
  };
  const categorySetter = category => {
    setCategoryRecipe(category);
  };

  const submitHandler = () => {
    const newItem = {
      uri: imageUri,
      id: titleRecipe + 'Key',
      title: titleRecipe,
      components: componentsRecipe,
      category: categoryRecipe,
    };
    const data = [...selectedCategory, newItem];
    if (titleRecipe.trim() && componentsRecipe.trim()) {
      dispatch(addActions(newItem));
      storeData(dataKey, data);
      dataCleaner();
    } else {
      Alert.alert('Заполните все поля');
    }
    console.log(categoryRecipe);
  };

  const dataCleaner = () => {
    setModalVisible(!modalVisible);
    setTitleRecipe('');
    setComponentsRecipe('');
    setImageUri('');
    setCategoryRecipe('starters');
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.inputBlock}>
              <TextInput
                style={styles.inputTitle}
                multiline
                editable
                maxLength={36}
                onChangeText={setTitleRecipe}
                placeholder="Some food"
                titleRecipe={titleRecipe}
                autoCorrect={false}></TextInput>
              <TextInput
                style={styles.inputDetails}
                multiline
                editable
                maxLength={100}
                onChangeText={setComponentsRecipe}
                placeholder="Composition"
                titleRecipe={componentsRecipe}
                autoCorrect={false}></TextInput>
            </View>
            <FoodImage category={categorySetter} imageUri={uriSetter} />
            <View style={styles.buttonsBlock}>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={submitHandler}>
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Add food</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBlock: {
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  centeredView: {
    flex: 0,
    marginTop: 0,
  },
  modalView: {
    flexDirection: 'column',
    margin: 15,
    borderWidth: 1,
    backgroundColor: COLOR.DEFAULT_BACKGROUND,
    borderRadius: 20,
    padding: 15,
    marginTop: 200,
    shadowColor: '#fff',
    shadowOffset: {
      width: -5,
      height: -5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
  button: {
    borderRadius: 15,
    padding: 5,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: COLOR.DARK_BLUE,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#c4c928',
    marginRight: 70,
    marginLeft: 70,
    marginBottom: 10,
    marginTop: 5,
  },
  buttonsBlock: {
    flexDirection: 'row',
  },
  buttonClose: {
    marginLeft: 120,
    marginRight: 0,
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#0d1137',
    backgroundColor: COLOR.DARK_BLUE,
  },
  buttonCancel: {
    borderColor: '#0d1137',
    backgroundColor: COLOR.DARK_BLUE,
    marginLeft: 40,
    marginRight: 10,
    marginTop: 30,
    borderWidth: 2,
  },
  textStyle: {
    color: COLOR.GOLD,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: '#000',
    marginBottom: 0,
    textAlign: 'center',
  },
  inputTitle: {
    backgroundColor: 'white',
    maxHeight: 60,
    padding: 10,
    margin: 5,
    color: '#000',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
  },
  inputDetails: {
    backgroundColor: 'white',
    maxHeight: 90,
    padding: 10,
    margin: 5,
    color: '#000',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 25,
  },
  imageBlock: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 100,
  },
  picker: {
    backgroundColor: 'black',
  },
});
