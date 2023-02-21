import React from "react";
import { StyleSheet,View,TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TopBar(){
    return (  
        <View style = {styles.topbar}>
                {/*Start Top bar*/}
                <TouchableOpacity style = {styles.topbarbutton}><FontAwesome5 name="toolbox" size={30} color="black" /></TouchableOpacity>
                <TouchableOpacity style = {styles.topbarbutton}><MaterialCommunityIcons name="bell-ring" size={30} color="black" /></TouchableOpacity>
                {/*End Top bar*/}
        </View>  
    )
    
    }
    const styles = StyleSheet.create({
        topbar: {
          border:1,
          paddingHorizontal:20,
          paddingVertical:10,
          flexDirection:'row',
          width:"100%",
          justifyContent:'space-between',
          
      
        },
        topbarbutton: {
          paddingHorizontal:8,
          paddingVertical:10,
          width: 45,
          height: 50,
          backgroundColor:'white',
          borderRadius: 20,
          alignItems: 'center'
        },
    });
    