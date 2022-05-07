import React, {useLayoutEffect} from 'react';
import {ScrollView, View, Image, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import {MEALS} from '../data/dummy-data';
import {RouteMealDetail, NavigationMealDetail} from '../types';
import Meal from '../models/meal';
import IconButton from '../components/IconButton';
import {addFavorite, removeFavorite} from '../store/redux/favorites';
import {RootState} from '../store/redux/store';
// import {FavoritesContext} from '../store/context/favorites-context';

type Props = {
  route: RouteMealDetail;
  navigation: NavigationMealDetail;
};

const MealDetailScreen = ({route, navigation}: Props) => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector(
    (state: RootState) => state.favoriteMeals.ids,
  );
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal: Meal | undefined = MEALS.find(meal => meal.id === mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({id: mealId}));
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({id: mealId}));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={mealIsFavorite ? 'star' : 'star-outline'}
            size={24}
            color="white"
            style="null"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [mealIsFavorite, navigation]);

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
