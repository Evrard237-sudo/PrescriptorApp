import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native' 

export default function AddPrescription() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
        {/* Creer et form */}
        <Image source={{uri: 'https://img.freepik.com/photos-gratuite/patient-malade-retraite-assis-dans-cabinet-medical-lors-visite-controle-utilisant-rendez-vous-soins-sante-pour-trouver-diagnostic-personne-agee-attendant-recevoir-medicaments-ordonnance-equipe-medicale_482257-48128.jpg?size=626&ext=jpg&ga=GA1.2.1519852688.1672795172&semt=sph'}} style={{width: 300, height: 300, margin: 5, borderRadius: 20}} />
        <TextInput placeholder='Name' style={styles.input} />
        <TextInput placeholder='Email' style={styles.input} />
        <Button title='Add prescription' style={styles.button} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: 300,
  },
})
