import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Button } from 'react-native';
import Header from './Header';
import SearchBar from './SeachBar';
import Categories from './Categories';
import TaskList from './TaskList';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header/>
        <SearchBar/>
        <Categories/>
        <TaskList/>
        <View style={styles.buttonContainer}>
          <Button title="Add a Task" onPress={() => alert('Button Pressed')} color="#ff5733" />
        </View>
      </ScrollView> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingBottom: 25,
    paddingTop: 25,
  },
  buttonContainer: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  
});

export default App;
