import React from 'react';
import {GestureResponderEvent, Pressable, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  name: string;
  size: number;
  color: string;
  style: {};
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
};
const IconButton = ({name, size, color, style, onPress}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <Ionicons name={name} size={size} color={color} style={style} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
