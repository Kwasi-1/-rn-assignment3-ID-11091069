import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const categories = [
  { id: '1', name: 'Exercise', tasks: '12 Tasks', image: require('./assets/young_woman_working_online.png') },
  { id: '2', name: 'Study', tasks: '12 Tasks', image: require('./assets/young_woman _working _at_desk.png') },
  { id: '3', name: 'Code', tasks: '15 Tasks', image: require('./assets/code.png') },
  { id: '4', name: 'Cook', tasks: '8 Tasks', image: require('./assets/cook.png') },
  { id: '5', name: 'Travel', tasks: '5 Tasks', image: require('./assets/travel.png') },
  { id: '6', name: 'Read', tasks: '10 Tasks', image: require('./assets/read.png') },
  { id: '7', name: 'Meditate', tasks: '7 Tasks', image: require('./assets/meditate.png') },
  { id: '8', name: 'Shop', tasks: '6 Tasks', image: require('./assets/shop.png') },
];

const Categories = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categories}>
        {categories.map(category => (
          <View key={category.id} style={styles.categoryCard}>
            <Text style={styles.categoryText}>{category.name}</Text>
            <Text style={styles.taskCount}>{category.tasks}</Text>
            <Image
              source={category.image}
              style={styles.categoryImage}
            />
          </View>
        ))}
      </ScrollView>
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
    flexDirection: 'row',
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
