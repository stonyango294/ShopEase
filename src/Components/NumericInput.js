import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

const CustomNumericInput = () => {
  const [productCount, setProductCount] = useState(0);

  const handleIncrement = () => {
    setProductCount(productCount + 1);
  };

  const handleDecrement = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    }
  };

  return (
    <View>
      {/* <Text>Product Count: {productCount}</Text */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{width: 30}} onPress={handleIncrement}>
          <Text style={{fontSize: 30, borderWidth: 1, borderRadius: 2}}>+</Text>
        </TouchableOpacity>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 2,
            // paddingHorizontal: 8,
            alignItems: 'center',
            paddingVertical: 3,
            width: 50
            // flex: 1,
          }}
          keyboardType="numeric"
          value={productCount.toString()}
          onChangeText={(text) => {
            const intValue = parseInt(text, 10);
            if (!isNaN(intValue) && intValue >= 0) {
              setProductCount(intValue);
            }
          }}
        /> 
        <TouchableOpacity style={{width: 30}} onPress={handleDecrement}>
          <Text style={{fontSize: 30, borderWidth: 1, borderRadius: 2}}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomNumericInput;
