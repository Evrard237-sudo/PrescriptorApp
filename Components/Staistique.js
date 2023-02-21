import React from "react";
import { StyleSheet,View,TouchableOpacity } from 'react-native';

export default function TopBar(){
    return (        
        <View style = {styles.statistique}>
            <View style = {styles.statPatient}>
            <Text>Patient statistics</Text>
            </View>
        </View>
    )
}