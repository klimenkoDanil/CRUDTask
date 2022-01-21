import React from 'react';
import AddFoodView from '../screens/AddFood/AddFoodView';

import StartersView from '../screens/Menu/Starters/StartersView';
import MainCoursesView from '../screens/Menu/MainCourses/MainCoursesView';
import DrinksView from '../screens/Menu/Drinks/DrinksView';
import SnacksView from '../screens/Menu/Snacks/SnacksView';
import DessertsView from '../screens/Menu/Desserts/DessertsView';

import StarterDetailsView from '../screens/Menu/Starters/StarterDetailsView';
import MainCourseDetailsView from '../screens/Menu/MainCourses/MainCourseDetailsView';
import DrinkDetailsView from '../screens/Menu/Drinks/DrinkDetailsView';
import SnackDetailsView from '../screens/Menu/Snacks/SnackDetailsView';
import DessertDetailsView from '../screens/Menu/Desserts/DessertDetailsView';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {View} from 'react-native';
import * as COLOR from '../constants/colors'

const StartersStack = createNativeStackNavigator();

const Starters = () => {
  return (
    <StartersStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StartersStack.Screen name="StartersView" component={StartersView} />
      <StartersStack.Screen
        name="StarterDetailsView"
        component={StarterDetailsView}
      />
    </StartersStack.Navigator>
  );
};

const MainCoursesStack = createNativeStackNavigator();

const MainCourses = () => {
  return (
    <MainCoursesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainCoursesStack.Screen
        name="MainCoursesView"
        component={MainCoursesView}
      />
      <MainCoursesStack.Screen
        name="MainCourseDetailsView"
        component={MainCourseDetailsView}
      />
    </MainCoursesStack.Navigator>
  );
};

const DrinksStack = createNativeStackNavigator();

const Drinks = () => {
  return (
    <DrinksStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <DrinksStack.Screen name="DrinksView" component={DrinksView} />
      <DrinksStack.Screen name="DrinkDetailsView" component={DrinkDetailsView} />
    </DrinksStack.Navigator>
  );
};

const SnacksStack = createNativeStackNavigator();

const Snacks = () => {
  return (
    <SnacksStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SnacksStack.Screen name="SnacksView" component={SnacksView} />
      <SnacksStack.Screen
        name="SnackDetailsView"
        component={SnackDetailsView}
      />
    </SnacksStack.Navigator>
  );
};

const DessertsStack = createNativeStackNavigator();

const Desserts = () => {
  return (
    <DessertsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <DessertsStack.Screen name="DessertsView" component={DessertsView} />
      <DessertsStack.Screen
        name="DessertDetailsView"
        component={DessertDetailsView}
      />
    </DessertsStack.Navigator>
  );
};

const MenuTab = createMaterialTopTabNavigator();

const Menu = () => {
  return (
    <MenuTab.Navigator
      initialRouteName="Starters"
      screenOptions={{
        tabBarActiveTintColor: 'gold',
        tabBarLabelStyle: {fontSize: 9},
        tabBarStyle: {backgroundColor: '#272940'},
      }}>
      <MenuTab.Screen name="Starters" component={Starters} />
      <MenuTab.Screen name="Main Courses" component={MainCourses} />
      <MenuTab.Screen name="Drinks" component={Drinks} />
      <MenuTab.Screen name="Snacks" component={Snacks} />
      <MenuTab.Screen name="Desserts" component={Desserts} />
    </MenuTab.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

export default Navigate = () => {
  return (
    <NavigationContainer >
      <View style={{marginBottom: 35, backgroundColor: '#000'}}></View>
        <Tab.Navigator
          activeColor={COLOR.GOLD}
          inactiveColor="white"
          barStyle={{backgroundColor: COLOR.DARK_BLUE}}>
          <Tab.Screen
            name="Menu"
            component={Menu}
            options={{
              tabBarLabel: 'Menu',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="AddFood"
            component={AddFoodView}
            options={{
              tabBarLabel: 'AddFood',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
    </NavigationContainer>
  );
};
