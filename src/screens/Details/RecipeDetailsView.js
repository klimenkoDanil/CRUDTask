import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const RecipeDetailsView = ({ route }) => {
  return (
    <View style={styles.recipe}>
      <View style={styles.block}>
        <Image style={styles.image} source={{ uri: route.params.uri }}></Image>
        <Text style={styles.title}> {route.params.title} </Text>
      </View>
      <Text style={styles.text}> {route.params.components} </Text>
    </View>
  );
}

export default RecipeDetailsView;

const styles = StyleSheet.create({
  recipe: {
    borderWidth: 1,
    flexDirection: "column",
    padding: 15,
    marginHorizontal: 10,
    marginBottom: 5,
    borderRadius: 3,
  },
  block: {
    alignItems: "center",
    marginBottom: 15
  },
  image: {
    width: 250,
    height: 150,
    marginBottom: 10
  },
  title: {
    fontSize: 26,
    fontWeight: "bold"
  },
  text: {
    fontSize: 20
  }
})