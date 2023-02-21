import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import TopBar from './Components/TopBar';
import HomeStat from './Components/HomeStat';
import SearchBar from './Components/SearchBar';
import Cards from './Components/Cards';


export default function App() {
  return (
    <View style={{backgroundColor: '#f8f8f8'}}>
      <TopBar />
      <HomeStat />
      <SearchBar />
      <ScrollView>
        <Cards style = {styles.Cards} horizontal = {true}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'left',
    justifyContent: 'top',
  },
});


