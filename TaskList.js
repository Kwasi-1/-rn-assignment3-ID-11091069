import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const tasks = [
  { id: '1', title: 'Mobile App Development' },
  { id: '2', title: 'Web Development' },
  { id: '3', title: 'Push Ups' },
  { id: '4', title: 'Reading a Book' },
  { id: '5', title: 'Grocery Shopping' },
  { id: '6', title: 'Yoga Session' },
  { id: '7', title: 'Write Blog Post' },
  { id: '8', title: 'Cook Lunch' },
  { id: '9', title: 'Learn React Native' },
  { id: '10', title: 'Jogging' },
  { id: '11', title: 'Laundry' },
  { id: '12', title: 'Clean the House' },
  { id: '13', title: 'Meditation' },
  { id: '14', title: 'Client Meeting' },
  { id: '15', title: 'Sleep' },
];

const renderTask = ({ item }) => (
  <View style={styles.taskCard}>
    <Text style={styles.taskText}>{item.title}</Text>
  </View>
);

const TaskList = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
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
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 45,
    paddingHorizontal: 15,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E8D1BA',
    marginHorizontal: 16,
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TaskList;
