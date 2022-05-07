import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import MealsList from '../components/MealList/MealsList';
// import {FavoritesContext} from '../store/context/favorites-context';
import {MEALS} from '../data/dummy-data';
import {RootState} from '../store/redux/store';

import {NavigationCategoryMeals} from '../types';

type Props = {
  navigation: NavigationCategoryMeals;
};

const FavoritesScreen = ({navigation}: Props) => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector(
    (state: RootState) => state.favoriteMeals.ids,
  );

  const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList listData={favoriteMeals} navigation={navigation} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
