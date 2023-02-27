import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import AddPrescription from './AddPrescription';

const Tab = createStackNavigator();

export default function ListPrescription({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.pannelAdd}>
            <Ionicons name="add-circle" size={50} color="black" />
            <Text style={{fontSize: 23}}>Add Prescription</Text>
        </View>
        <View style={styles.pannel}>
            <Ionicons name="ios-person-circle" size={50} color="black" style={{paddingHorizontal: 2}}/>
            <View style={styles.textDescription}>
                <Text style={{fontSize: 25}}>Lorem</Text>
                <Text>Lorem ipsum dolor irt djs ea</Text>
            </View>
            <Ionicons name="close-circle-sharp" size={24} color="red" style={{position: 'absolute', right:0, padding: 4}} />
        </View>
        <View style={styles.pannel}>
            <Ionicons name="ios-person-circle" size={50} color="black" style={{paddingHorizontal: 2}}/>
            <View style={styles.textDescription}>
                <Text style={{fontSize: 25}}>Lorem</Text>
                <Text>Lorem ipsum dolor irt djs ea</Text>
            </View>
            <Ionicons name="close-circle-sharp" size={24} color="red" style={{position: 'absolute', right:0, padding: 4}} />
        </View>
        <View style={styles.pannel}>
            <Ionicons name="ios-person-circle" size={50} color="black" style={{paddingHorizontal: 2}}/>
            <View style={styles.textDescription}>
                <Text style={{fontSize: 25}}>Lorem</Text>
                <Text>Lorem ipsum dolor irt djs ea</Text>
            </View>
            <Ionicons name="close-circle-sharp" size={24} color="red" style={{position: 'absolute', right:0, padding: 4}} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
    },
    pannel:{
        backgroundColor:'gray',
        borderRadius:10,
        padding: 23,
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 5,
    },
    textDescription:{

    },
    pannelAdd:{
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 0,
        paddingLeft: 0,
    },
})
