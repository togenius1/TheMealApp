import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Platform,
  Pressable,
  StyleSheet,
} from 'react-native';
// import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import {MEALS} from '../data/dummy-data';
import DefaultText from '../components/DefaultText';
import {RouteMealDetail, NavigationMealDetail} from '../types';
import Meal from '../models/meal';
import Colors from '../constants/Colors';

type Props = {
  route: RouteMealDetail;
  navigation: NavigationMealDetail;
  children: any;
};

const ListItem = (props: {children: any}) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = ({route, navigation}: Props) => {
  const mealId = route.params.mealId;

  const selectedMeal: Meal | undefined = MEALS.find(meal => meal.id === mealId);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused: Call any action
      navigation.setOptions({
        headerTitle: selectedMeal?.title,
        headerRight: () => (
          <View style={styles.favorites}>
            <Ionicons name="star" size={22} color={'white'} />
            <Ionicons
              name="star-outline"
              size={22}
              color={'white'}
              style={{marginLeft: 5}}
            />
          </View>
        ),
      });
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation, selectedMeal?.title]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{uri: selectedMeal?.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
        textStyle={styles.detailText}
        style="null"
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal?.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  favorites: {
    flexDirection: 'row',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
