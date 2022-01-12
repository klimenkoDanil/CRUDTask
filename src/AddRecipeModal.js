import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import { RecipeImage } from "./RecipeImage";

export const AddRecipeModal = ({ onSubmit }) => {
  const [modalVisible, setModalVisible] = useState([]);
  const [titleRecipe, setTitleRecipe] = useState(['']);
  const [componentsRecipe, setComponentsRecipe] = useState(['']);
  const [imageUri, setImageUri] = useState([''])

  const uriSetter = (fileUri) => {
    setImageUri(fileUri)
  }

  const submitHandler = () => {
    if (titleRecipe.trim() && componentsRecipe.trim()) {
      onSubmit(titleRecipe, componentsRecipe, imageUri)
      setModalVisible(!modalVisible)
      setTitleRecipe('')
      setComponentsRecipe('')
      setImageUri('')
    } else {
      Alert.alert("Заполните все поля")
    }
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={styles.inputBlock}>
            <TextInput style={styles.textInput}
              onChangeText={setTitleRecipe}
              placeholder="Borsch, Vareniki"
              titleRecipe={titleRecipe}
              autoCorrect={false}>
            </TextInput>
            <TextInput style={styles.textInput}
              onChangeText={setComponentsRecipe}
              placeholder="RECIPE"
              titleRecipe={componentsRecipe}
              autoCorrect={false}>
            </TextInput>
          </View>
            <RecipeImage imageUri={uriSetter}></RecipeImage>
            <View style={styles.buttonsBlock}>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={submitHandler}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
          </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>New recipe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBlock: {
    alignItems: 'stretch',
    flexDirection: "column",
  },
  centeredView: {
    flex: 0,
    marginTop: 0,
  },
  modalView: {
    flexDirection: "column",

    margin: 15,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    marginTop: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 1
  },
  button: {
    borderRadius: 15,
    padding: 5,
    elevation: 2
  },
  buttonOpen: {
    borderRadius: 20,
    borderWidth: 3,
    backgroundColor: "#fff",
    marginRight: 250,
    marginBottom: 10
  },
  buttonsBlock: {
    flexDirection: "row"
  },
  buttonClose: {
    marginLeft: 120,
    marginRight: 0,
    marginTop: 50,
    borderWidth: 2
  },
  buttonCancel: {
    backgroundColor: "red",
    marginLeft: 40,
    marginRight: 10,
    marginTop: 50,
    borderWidth: 2,
  },
  textStyle: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    color: "#000",
    marginBottom: 0,
    textAlign: "center"
  },
  textInput: {
    padding: 10,
    margin: 10,
    color: "#000",
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 25
  }
});