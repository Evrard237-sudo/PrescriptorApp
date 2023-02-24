import { StyleSheet, View, Text } from 'react-native';
import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function Statistique() {
    return (
        
        <View style={styles.statistique}>
          
        <View style={styles.stat}>
        <Text style={{fontWeight: '500'}}>Patient statistics</Text>
          {/* Start StatValue */}
            <View style={styles.statValue}>
                <Text style={styles.value}>12</Text>
                <View style={styles.percentage}>
                  <Text><AntDesign name="arrowup" size={14} color="green" />11%
                  <Text>today</Text></Text>
                </View>
            </View>
        </View>
        <View>
          {/* end StatValue */}
            <Text style={styles.statLabel}>New patients</Text>
            <View style={styles.statValue}>
            <Text style={styles.value}>24</Text>
            
            <View style={styles.descontainer}>
              <Ionicons name="stats-chart" size={44} color="black" />
              <Text>
                Insurance patients
              </Text>
            </View>
        </View>
        </View>
        </View>
       
    );
  
}
const styles = StyleSheet.create({
    statistique:{
      backgroundColor:'white',
      borderRadius: 30,
      paddingHorizontal: 24,
      paddingVertical: 40,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    TextSta:{
      
    },
    value:{
      fontSize:45,
      fontWeight:'bold',
      marginBottom:10,
      justifyContent:'space-between'
    },
    stat:{
      paddingRight: 15,
    },
    statValue:{
      flexDirection: 'row',
      width: '100%',
    },
    statLabel:{
      fontWeight: '300',
    },
    percentage:{
      paddingVertical: 12,
    },
    descontainer:{
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingHorizontal: 12,
    }
  });