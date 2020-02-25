import React from 'react';
import { Text } from 'react-native';

export default function CondensedFontText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'univers-condensed' }]} />
  );
}
