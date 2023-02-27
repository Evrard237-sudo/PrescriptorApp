import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Screens/Home";
import AddPrescription from "../Screens/AddPrescription";
import ListPrescription from "../Screens/ListPrescription";
import Appointment from "../Screens/Appointment";

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name='Home' component={Home} options={{headerShown: false, title: 'Home'}}/>
      <Stack.Screen name='AddPrescription' component={AddPrescription} options={{title: 'Add prescription'}}/>
      <Stack.Screen name='ListPrescription' component={ListPrescription} options={{title: 'Prescriptions List'}}/>
      <Stack.Screen name='Appointment' component={Appointment} options={{title: 'Appointment'}}/>
    </Stack.Navigator>
  );
}