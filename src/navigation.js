import React from "react";
import RecipeView from "./RecipeView";
import RecipeDetailsView from "./RecipeDetailsView";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Recipe"
          component={RecipeView}
          options={{title: "Recipes"}}
        />
        <Stack.Screen
          name="Details"
          component={RecipeDetailsView}
          options={{title: "Details"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}