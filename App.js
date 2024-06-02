import { SafeAreaView, View, Text, TextInput, Image, StyleSheet, Button, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5';

const App = () => {
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

  const renderTask = ({ item }) => (
    <View style={styles.taskCard}>
      <Text style={styles.taskText}>{item.title}</Text>
    </View>
  );

  const renderCategory = ({ item }) => (
    <View style={styles.categoryCard}>
      <Text style={styles.categoryText}>{item.title}</Text>
      <Text style={styles.taskCount}>{item.tasks} Tasks</Text>
      <Image source={item.image} style={styles.categoryImage} />
    </View>
  );

  const renderHeader = () => (
    <>
      {/* Header */}
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

      {/* Search Bar */}
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

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
      />

      {/* Ongoing Tasks */}
      <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={
          <View style={styles.buttonContainer}>
            <Button
              title="Add New Task"
              onPress={() => alert('Button Pressed')}
              color="#ff5733"
            />
          </View>
        }
      />
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
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    padding: 8,
    marginBottom: 16,
  },
  searchBox: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 8,
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 16,
  },
  categories: {
    paddingLeft: 16,
    marginBottom: 20
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
  buttonContainer: {
    marginTop: 16,
    marginHorizontal: 16,
  },
});

export default App;
