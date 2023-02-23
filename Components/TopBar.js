
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function TopBar() {
  
    return (
    
    <View style={styles.topbar}>
        {/* start top bar */}
       <TouchableOpacity style={styles.topbarbutton}>
            <MaterialIcons name="home-repair-service" size={30} color="black" />
        </TouchableOpacity>
       <TouchableOpacity style={styles.topbarbutton}>
            <MaterialCommunityIcons name="bell" size={30} color="black" />
       </TouchableOpacity>
       {/* end topbar */}
     </View>
    
    );
    }
const styles = StyleSheet.create({
    topbar: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
      
      },
  topbarbutton: {
    width: 48,
    height: 48,
    backgroundColor:'white',
    borderRadius:20,
    alignItems:'center',
    paddingTop:5,
  }
    
});
