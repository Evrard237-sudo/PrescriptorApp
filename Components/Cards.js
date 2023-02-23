import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Cards() {
  
    return (
          
            <View style={styles.Card}>
              <View style={styles.CardHeader1}>
                <TouchableOpacity style={styles.Icon}>
                  <MaterialCommunityIcons name="pencil-circle" size={35} color="white" />
                </TouchableOpacity>
                <Text style={styles.CardName}>
                  Write Prescription
                </Text>
                <Text style={styles.CardDesc}>
                  to patient
                </Text>
                <View style={styles.CardsAction}>
                  <Text style={styles.CardType}>TEMPLATE</Text>
                  <TouchableOpacity style={styles.IconAct}>
                    <Ionicons name="arrow-forward-circle" size={35} color="black" />
                  </TouchableOpacity>
              </View>
            </View>
            {/* end CardHeader */}

            {/* start CardsAction */}
           
          <View style={styles.CardHeader2}>
              <TouchableOpacity style={styles.Icon}>
              <MaterialCommunityIcons name="pencil-circle" size={35} color="white" />
              </TouchableOpacity>
              <Text style={styles.CardName}>
                Lorem
              </Text>
              <Text style={styles.CardDesc}>
                Continue to fill patient profile
              </Text>
               {/* start CardsAction */}
            <View style={styles.CardsAction}>
                <Text style={styles.CardType}>REMINDER</Text>
                <TouchableOpacity style={styles.IconAct}>
                <Ionicons name="arrow-forward-circle" size={35} color="black" />
                </TouchableOpacity>
            </View>
          </View>
          </View>
 
    );
}
const styles = StyleSheet.create({
    Card:{
      justifyContent:'space-between',
      flexDirection:'row', 
    },
    CardHeader1:{
      marginTop:30,
      marginBottom:20,
      backgroundColor:'#B0ECAD',
      marginLeft:25,
      width:200,
      borderRadius:15,
      height: 'auto'
    },
    CardHeader2:{
      marginTop:30,
      marginBottom:20,
      backgroundColor:'#9AA0FC',
      marginLeft:25,
      width:200,
      borderRadius:15,
    },
    CardName:{
      fontSize:20,
      fontWeight:'bold',
      paddingTop:20,
      paddingLeft:10,
    },
    CardDesc:{
      fontSize:15,
      paddingTop:3,
      paddingLeft:10,
    },
    CardsAction:{
      justifyContent:'space-between',
      flexDirection:'row',
      paddingTop:30,
      paddingLeft:20,
    },
    CardType:{
      paddingTop:18,
    },
    IconAct:{
      paddingRight:5,
      paddingTop:8,
    },
    Icon:{
      paddingLeft:20,
      paddingTop:15,
    }
});
