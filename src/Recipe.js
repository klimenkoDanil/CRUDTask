import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";

export const Recipe = ({ item, onRemove, onOpenRecipe }) => {

  return (
    <TouchableOpacity 
      onPress={onOpenRecipe.bind(null, item)}
      onLongPress={onRemove.bind(null, item.id)}
    >
    <View style={styles.recipe}>
      <Image style={styles.image} source={{ uri: item.uri }}></Image>
      <Text> {item.title} </Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  recipe: {
    borderWidth: 3,
    flexDirection: "column",
    padding: 15,
    marginBottom: 5,
    borderRadius: 3,
    alignItems: 'center'
  },
  image: {
    width: 250,
    height: 150,
    marginBottom: 10
  }
})