// SearchBar.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBox}>
        <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
        />
      </View>
      <Icons name="sliders-h" size={24} color="#fff" style={styles.filterIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    padding: 8,
    marginBottom: 16,
    margin: 10
  },
  searchBox: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    // padding: 8,
    height: 49,
  },
  searchIcon: {
    padding: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  filterIcon: {
    marginLeft: 20,
    backgroundColor: '#F0522F',
    padding: 8,
    borderRadius: 14,
    height: 48,
    width: 50,
    paddingTop: 12,
    paddingLeft: 13,
  },
});

export default SearchBar;
