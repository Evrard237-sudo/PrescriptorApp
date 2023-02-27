import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import TopBar from '../Components/TopBar';
import HomeStart from '../Components/HomeStart';
import SearchBar from '../Components/SearchBar';
import Cards from '../Components/Cards'
import Statistique from '../Components/Statistique';
import { useNavigation } from '@react-navigation/native'



export default function Home({navigation}) {
  return (
    <View style={{backgroundColor: '#f2f2f2'}}>
      <StatusBar style='auto' />
      <View style={styles.topBar}>
        <TopBar navigation={navigation} />
      </View>
      <View style={styles.HomeStart}>
        <HomeStart navigation={navigation} />
      </View>
      <View>
        <SearchBar />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Cards />
      </ScrollView>
      <View style={styles.Statistique}>
        <Statistique />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    marginTop: 28, 
  },
  HomeStart: {
    padding: 0,
    margin: 0,
  },
  SearchBar: {
    
  },
  Statistique: {
    marginTop: 20,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 20,
  }
})