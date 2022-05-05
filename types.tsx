import type {RouteProp} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  MealsCategories: {};
  MealsOverview: {categoryId: string};
  MealDetail: {mealId: string};
  Favorites: {};
};

export type NavigationCategories = NativeStackNavigationProp<
  RootStackParamList,
  'MealsCategories'
>;

export type RouteCategories = RouteProp<RootStackParamList, 'MealsCategories'>;

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
