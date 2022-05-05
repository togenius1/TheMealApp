import React from 'react';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';
import {NavigationCategoryMeals, RouteCategoryMeals} from '../types';

type Props = {
  route: RouteCategoryMeals;
  navigation: NavigationCategoryMeals;
};

const CategoryMealScreen = ({route, navigation}: Props) => {
  const catId = route.params.categoryId;

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused: Call any action
      navigation.setOptions({
        headerTitle: selectedCategory?.title,
      });
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation, selectedCategory?.title]);

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

export default CategoryMealScreen;
