import {View, Text} from 'react-native';
import React from 'react';
import {HStack} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Resources/Color';
import product from '../Resources/Product';

const Rating = ({value, text}) => {
  const size = 12;
  const color = Colors.orange;

  return (
    <HStack space={0.4} mt={1} alignItems={'center'}>
      <Icon 
        name={value >= 1 ? "star" : value >= 0.5 ? "star-half" : "star-o"} 
        size={size} 
        color={color} 
      />
      <Icon 
        name={value >= 2 ? "star" : value >= 1.5 ? "star-half" : "star-o"} 
        size={size} 
        color={color} 
      />
      <Icon 
        name={value >= 3 ? "star" : value >= 2.5 ? "star-half" : "star-o"} 
        size={size} 
        color={color} 
      />
      <Icon 
        name={value >= 4 ? "star" : value >= 3.5 ? "star-half" : "star-o"} 
        size={size} 
        color={color} 
      />
      <Icon 
        name={value >= 5 ? "star" : value >= 4.5 ? "star-half" : "star-o"} 
        size={size} 
        color={color} 
      />
    </HStack>
  );
};

export default Rating;