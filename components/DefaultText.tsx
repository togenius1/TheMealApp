import React from 'react';
import {Text, StyleSheet} from 'react-native';

const DefaultText = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
});

export default DefaultText;
