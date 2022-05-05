import React, {useLayoutEffect} from 'react';
import {ScrollView, View, Image, Text, StyleSheet} from 'react-native';
// import {HeaderButtons, Item} from 'react-navigation-header-buttons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import {MEALS} from '../data/dummy-data';
import DefaultText from '../components/DefaultText';
import {RouteMealDetail, NavigationMealDetail} from '../types';
import Meal from '../models/meal';
import IconButton from '../components/IconButton';
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

  function headerButtonPressHandler() {
    console.log('Pressed!');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name="star"
            size={24}
            color="white"
            style="null"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation]);

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
