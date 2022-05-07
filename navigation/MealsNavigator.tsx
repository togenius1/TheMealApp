import React from 'react';
import {Platform, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// import type {StackNavigationOptions} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';
import {RootStackParamList, DrawerParamList} from '../types';

const defaultStackStyle = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  contentStyle: {
    backgroundColor: '#3f2f25',
  },
};

const defaultDrawerStyle = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  sceneContainerStyle: {
    backgroundColor: '#3f2f25',
  },
  drawerContentStyle: {
    backgroundColor: Colors.primaryColor,
  },
  drawerInactiveTintColor: 'white',
  drawerActiveTintColor: Colors.primaryColor,
  drawerActiveBackgroundColor: '#e4baa1',
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function MealsStackNavigator() {
  return (
    <RootStack.Navigator screenOptions={defaultStackStyle}>
      <RootStack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          title: 'All Categories',
          headerShown: false,
        }}
      />
      <RootStack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      <RootStack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={{title: 'About the Meal'}}
      />
    </RootStack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={defaultDrawerStyle}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function MealsTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        tabBarActiveTintColor: Colors.accentColor,
        tabBarStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerStyle: {
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
