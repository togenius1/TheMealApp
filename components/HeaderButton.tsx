import React from 'react';
import {Platform, View} from 'react-native';
// import {HeaderButton} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  name: string;
  size: number;
  color: string;
};
const CustomHeaderButton = ({name, size, color}: Props) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default CustomHeaderButton;
