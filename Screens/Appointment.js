import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Appointment() {
  return (
    <View style={styles.container}>
        <View style={styles.pannel}>
          <MaterialCommunityIcons name="prescription" size={24} color="black" />
            <View style={styles.textDescription}>
                <Text style={{fontSize: 25}}>Lorem</Text>
                <Text>Lorem ipsum dolor irt djs ea</Text>
                <View style={styles.checkCont}>
                  <AntDesign name="checkcircle" size={24} color="black" />
                  <Text>Check up</Text>
                </View>
            </View>
            <Ionicons name="close-circle-sharp" size={29} color="black" style={{position: 'absolute', right:0, padding: 4, color: 'red'}} />
        </View>
        <View style={styles.pannel}>
        <MaterialCommunityIcons name="prescription" size={24} color="black" />
            <View style={styles.textDescription}>
                <Text style={{fontSize: 25}}>Lorem</Text>
                <Text>Lorem ipsum dolor irt djs ea</Text>
                <View style={styles.checkCont}>
                <AntDesign name="checkcircle" size={24} color="black" style={{color: 'blue'}} />
                  <Text>Check up</Text>
                </View>
            </View>
            <Ionicons name="close-circle-sharp" size={29} color="black" style={{position: 'absolute', right:0, padding: 4, color: 'red'}} />
        </View>
        <View style={styles.pannel}>
        <MaterialCommunityIcons name="prescription" size={24} color="black" />
            <View style={styles.textDescription}>
                <Text style={{fontSize: 25}}>Lorem</Text>
                <Text>Lorem ipsum dolor irt djs ea</Text>
                <View style={styles.checkCont}>
                  <AntDesign name="checkcircle" size={24} color="black" style={{color: 'blue'}} />
                  <Text>Check up</Text>
                </View>
            </View>
            <Ionicons name="close-circle-sharp" size={29} color="black" style={{position: 'absolute', right:0, padding: 4, color: 'red'}} />
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
  checkCont:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
      paddingRight: 10,
  }
})
