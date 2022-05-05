import React from 'react';
import {Platform} from 'react-native';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';
import {NavigationCategoryMeals} from '../types';
import Colors from '../constants/Colors';

type Props = {
  navigation: NavigationCategoryMeals;
};

const FavoritesScreen = ({navigation}: Props) => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused: Call any action
      navigation.setOptions({
        headerShown: true,
        headerTitle: 'Your Favorites',
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
      });
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return <MealList listData={favMeals} navigation={navigation} />;
};

// FavoritesScreen.navigationOptions = navData => {
//   return {
//     headerTitle: 'Your Favorites',
//     // headerLeft: (
//     // <HeaderButtons HeaderButtonComponent={HeaderButton}>
//     //   <Item
//     //     title="Menu"
//     //     iconName="ios-menu"
//     //     onPress={() => {
//     //       navData.navigation.toggleDrawer();
//     //     }}
//     //   />
//     // </HeaderButtons>
//     // )
//   };
// };

export default FavoritesScreen;
