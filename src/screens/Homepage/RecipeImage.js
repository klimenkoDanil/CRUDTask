import React, { useState } from "react";
import * as ImagePicker from 'react-native-image-picker';
import { Image, StyleSheet, View, TouchableOpacity, Text, Alert} from "react-native";

export const RecipeImage = ({ imageUri }) => {

  const noPhoto = 'https://ericson-lab.com/wp-content/uploads/2017/08/nophoto.png'
  const [fileUri, setFileUri] = useState(noPhoto)

  chooseImage = () => {
    let options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('dsds', response?.assets?.[0]?.uri);
        setFileUri(response?.assets?.[0]?.uri)
      }
    });
  }

  renderFileUri = () => {
    if (fileUri) {
      imageUri(fileUri)
      return <Image
        source={{ uri: fileUri }}
        style={styles.images}
      />
    } else {
      imageUri(fileUri)
      return <Image
      source={{ uri: fileUri }}
        style={styles.images}
      />
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={this.chooseImage} style={styles.btnSection}>
        <Text style={styles.btnText}>Choose File</Text>
        {this.renderFileUri()}  
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    alignItems: "center"
  },
  images: {
    width: 250,
    height: 200,
    borderColor: 'black',
    //borderWidth: 1,
    marginHorizontal: 3
  },
  btnSection: {
    alignItems: "center",
    marginStart: 10,
    width: 310,
    height: 220,
    borderWidth: 1
  },
  btnText: {
    fontSize: 10,
    color: '#000'
  }
});