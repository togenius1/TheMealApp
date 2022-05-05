import React from 'react';
import {Platform, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// import type {StackNavigationOptions} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';
import {RootStackParamList, DrawerParamList} from '../types';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  contentStyle: {
    backgroundColor: '#3f2f25',
  },
  headerTintColor: 'white',
  // headerTitle: 'All Categories',
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function MealsStackNavigator() {
  return (
    <RootStack.Navigator screenOptions={defaultStackNavOptions}>
      <RootStack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          title: 'All Categories',
        }}
      />
      <RootStack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      <RootStack.Screen name="MealDetail" component={MealDetailScreen} />
    </RootStack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function MealsTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.accentColor,
        tabBarStyle: {
          backgroundColor: Colors.primaryColor,
        },
      }}>
      <BottomTab.Screen
        name="Meals"
        component={MealsStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="star" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <MealsTabNavigator />
    </NavigationContainer>
  );
};

export default MealsNavigator;
