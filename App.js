import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Button } from 'react-native';
import Header from './Header';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        
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
  
});

export default App;
