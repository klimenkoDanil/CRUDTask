import React from "react";
import { View, Text, Image } from "react-native";
import { detailsStyles } from "../styles/DefaultDetailsStyles";

const DrinkDetailsView = ({ route }) => {
  return (
    <View style={detailsStyles.recipe}>
      <View style={detailsStyles.block}>
        <Image style={detailsStyles.image} source={{ uri: route.params.uri }}></Image>
        <Text style={detailsStyles.title}> {route.params.title} </Text>
      </View>
      <Text style={detailsStyles.text}> {route.params.components} </Text>
    </View>
  );
}

export default DrinkDetailsView;