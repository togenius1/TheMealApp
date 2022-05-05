import type {RouteProp} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Drawer: {};
  MealsOverview: {categoryId: string};
  MealDetail: {mealId: string};
  Favorites: {};
};

export type DrawerParamList = {
  Categories: {};
  Favorites: {};
};

export type NavigationCategories = NativeStackNavigationProp<
  RootStackParamList,
  'Drawer'
>;

export type RouteCategories = RouteProp<RootStackParamList, 'Drawer'>;

export type NavigationCategoryMeals = NativeStackNavigationProp<
  RootStackParamList,
  'MealsOverview'
>;

export type RouteCategoryMeals = RouteProp<RootStackParamList, 'MealsOverview'>;

export type NavigationMealDetail = NativeStackNavigationProp<
  RootStackParamList,
  'MealDetail'
>;

export type RouteMealDetail = RouteProp<RootStackParamList, 'MealDetail'>;
