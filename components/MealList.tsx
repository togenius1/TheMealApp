import React from 'react';
import {View, FlatList, StyleSheet, Platform} from 'react-native';

import MealItem from './MealItem';
import Meal from '../models/meal';
import {NavigationCategoryMeals} from '../types';

type Props = {
  // route: RouteProp<RootStackParamList, 'CategoryMeals'>;
  navigation: NavigationCategoryMeals;
  listData: Meal[];
};

const MealList = ({listData, navigation}: Props) => {
  const renderMealItem = (itemData: any) => {
    return (
      <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          navigation.navigate('MealDetail', {
            mealId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    // marginTop: Platform.OS === 'ios' ? 55 : 0,
  },
});
