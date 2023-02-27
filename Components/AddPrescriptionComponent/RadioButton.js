import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

state = {
    value: null,
};

export default function RadioButton() {
    const { PROP } = this.props;
    const { value } = this.state;
  return (
    <View 
        {PROP.map(res => {
            
        } )}>
        
    </View>
  )
}


