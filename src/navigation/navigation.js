import React from "react";
import RecipeView from "../screens/Homepage/RecipeView";
import RecipeDetailsView from "../screens/Details/RecipeDetailsView";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

//TABS
// import Home from 'src/screens/Home';
// import AddVehicle from 'src/screens/AddVehicle';
// import Search from 'src/screens/Search';

const appNavigator = createStackNavigator({
  Recipe: {
    screen: RecipeView,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
  Details: {
    screen: RecipeDetailsView,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
      
    },
  },

},
{
  initialRouteName: 'Recipe',
});

export default createAppContainer(appNavigator);