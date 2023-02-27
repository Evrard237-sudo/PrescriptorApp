import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Image, StyleSheet, TextInput, Button, Alert } from 'react-native' 

export default function AddPrescription() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
        {/* Creer et form */}
        <Image source={{uri: 'https://img.freepik.com/photos-gratuite/patient-malade-retraite-assis-dans-cabinet-medical-lors-visite-controle-utilisant-rendez-vous-soins-sante-pour-trouver-diagnostic-personne-agee-attendant-recevoir-medicaments-ordonnance-equipe-medicale_482257-48128.jpg?size=626&ext=jpg&ga=GA1.2.1519852688.1672795172&semt=sph'}} style={{width: 300, height: 300, margin: 5, borderRadius: 20}} />
        <TextInput placeholder='Name' style={styles.input} />
        <TextInput placeholder='Adress' style={styles.input} />
        <View style={{display: "flex", flexDirection: "row", marginHorizontal: 1}}>
            <Text style={{marginRight: 50}}>Male</Text> 
            <Text style={{marginLeft: 50}}>Female</Text>
        </View>
        <TextInput placeholder='Details description' multiline={true} numberOfLines={10} style={styles.textArea} />
        <Button title='Add prescription'  onPress={() => Alert.alert("Prescription adding successfully !!!")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: 300,
  },
  textArea:{
    height: 100,
    textAlignVertical: 'top',
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: 300,
  },
})
