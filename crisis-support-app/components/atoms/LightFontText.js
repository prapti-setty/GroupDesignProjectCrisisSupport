import React from 'react';
import { Text } from 'react-native';

export default function LightFontText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}
