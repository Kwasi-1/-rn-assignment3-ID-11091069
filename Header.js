import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Hello, Devs</Text>
        <Text style={styles.subtitle}>14 tasks today</Text>
      </View>
      <Image
        source={require('./assets/person.png')}
        style={styles.userImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: '#fff'
  },
});

export default Header;
