import React from 'react';
import {View, Text, StyleSheet, Platform, Pressable} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import type {RouteProp} from '@react-navigation/native';

import {NavigationCategories} from '../types';

type Props = {
  // route: RouteProp<RootStackParamList, 'Categories'>;
  navigation: NavigationCategories;
  id: string;
  title: string;
  color: string;
};

const CategoryGridTile = ({navigation, id, title, color}: Props) => {
  // let TouchableCmp: any = TouchableOpacity;

  // if (Platform.OS === 'android' && Platform.Version >= 21) {
  //   TouchableCmp = TouchableNativeFeedback;
  // }

  const onSelect = () => {
    navigation.navigate('MealsOverview', {categoryId: id});
  };

  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onSelect}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{color: '#ccc'}}>
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
  },
  title: {
    // fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    textAlign: 'right',
    fontWeight: 'bold',
  },
});

export default CategoryGridTile;
