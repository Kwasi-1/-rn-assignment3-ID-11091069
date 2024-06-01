import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const categories = [
  { id: '1', title: 'Exercise', tasks: '12 Tasks', image: require('./assets/young_woman_working_online.png') },
  { id: '2', title: 'Study', tasks: '15 Tasks', image: require('./assets/young_woman _working _at_desk.png') },
  { id: '3', title: 'Code', tasks: '8 Tasks', image: require('./assets/code.png') },
  { id: '4', title: 'Cook', tasks: '5 Tasks', image: require('./assets/cook.png') },
  { id: '5', title: 'Read', tasks: '7 Tasks', image: require('./assets/read.png') },
  { id: '6', title: 'Meditate', tasks: '4 Tasks', image: require('./assets/meditate.png') },
  { id: '7', title: 'Shop', tasks: '6 Tasks', image: require('./assets/shop.png') },
  { id: '8', title: 'Clean', tasks: '10 Tasks', image: require('./assets/travel.png') },
];

const Categories = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.categoryCard}>
            <Text style={styles.categoryText}>{item.title}</Text>
            <Text style={styles.taskCount}>{item.tasks}</Text>
            <Image source={item.image} style={styles.categoryImage} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.categories}
      />
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 16,
  },
  categories: {
    marginBottom: 26,
    paddingLeft: 16,
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 6,
    width: 186,
    height: 192,
    marginRight: 24,
  },
  categoryImage: {
    width: 145,
    height: 138,
    alignSelf: 'center',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  taskCount: {
    fontSize: 14,
    paddingLeft: 10,
  },
});

export default Categories;
