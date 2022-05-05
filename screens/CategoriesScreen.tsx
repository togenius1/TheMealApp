import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
// import type {RouteProp} from '@react-navigation/native';
// import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

// import HeaderButton from '../components/HeaderButton';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import {NavigationCategories} from '../types';

type Props = {
  navigation: NavigationCategories;
};

const CategoriesScreen = ({navigation}: Props) => {
  const renderGridItem = (itemData: any) => {
    return (
      <CategoryGridTile
        id={itemData.item.id}
        title={itemData.item.title}
        color={itemData.item.color}
        navigation={navigation}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
