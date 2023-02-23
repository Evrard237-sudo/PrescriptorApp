import { StyleSheet, View, Text } from 'react-native';
import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function Statistique() {
    return (
        <View style={styles.Statistique}>
      <View style={styles.TextSta}>
        <Text>Patient statistics</Text>
        <View style={styles.stat}>
          {/* Start StatValue */}
            <View style={styles.statValue}>
                <Text style={styles.value}>12</Text>
                <View style={styles.percentage}>
                <Text><AntDesign name="arrowup" size={14} color="green" />11%
                <Text>today</Text></Text>
                </View>
            </View>
          {/* end StatValue */}
            <Text style={styles.statLabel}>New patients</Text>
        </View>

        {/* end Stat */}
        <View style={styles.statValue}>
            <Text style={styles.value}>24</Text>
            <Ionicons name="stats-chart" size={24} color="black" />
            <View>
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
    Statistique:{
      backgroundColor:'white',
      borderRadius: 50,
      marginTop: 10,
      display: 'flex',
    },
    TextSta:{

    }
  });