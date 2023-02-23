import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TopBar from './Components/TopBar';
import HomeStart from './Components/HomeStart';
import SearchBar from './Components/SearchBar';
import Cards from './Components/Cards'
import Statistique from './Components/Statistique';

export default function App() {
  return (
    <View style={{backgroundColor: '#f2f2f2'}}>
      <StatusBar style='auto' />
      <View style={styles.topBar}>
        <TopBar />
      </View>
      <View style={styles.HomeStart}>
        <HomeStart />
      </View>
      <View>
        <SearchBar />
      </View>
      <ScrollView>
        <Cards />
      </ScrollView>
      <Statistique />
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
    
  }
})