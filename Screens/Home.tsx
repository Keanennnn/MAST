import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

interface MenuItem {
  dishName: string;
  description: string;
  price: string;
  course: string;
}

const Home = ({ navigation }: { navigation: any }) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const handleAddItem = () => {
    if (dishName && description && price && course) {
      setMenuItems((prevItems) => [
        ...prevItems,
        { dishName, description, price, course },
      ]);
      setDishName('');
      setDescription('');
      setPrice('');
      setCourse('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.WelcomeText}>Welcome to your Menu App</Text>

      {/* Dish Name Input */}
      <Text style={styles.HeadingText}>Dish Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />

      {/* Description Input */}
      <Text style={styles.HeadingText}>Description:</Text>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      {/* Price Input */}
      <Text style={styles.HeadingText}>Price:</Text>
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
      />

      {/* Course Input */}
      <Text style={styles.HeadingText}>Select Course:</Text>
      <TextInput
        style={styles.input}
        placeholder="Course (e.g., Starter, Main, Dessert)"
        value={course}
        onChangeText={setCourse}
      />

      {/* Add Menu Item Button */}
      <Button title="Add Item" onPress={handleAddItem} />

      {/* Menu Display */}
      <Text style={styles.menuTitle}>Menu:</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.dishName}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
            <Text>{item.course}</Text>
            {/* Navigate to DishDetail on click */}
            <Button
              title="View Details"
              onPress={() => navigation.navigate('DishDetail', { item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },

  WelcomeText: {
    paddingTop: 40,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
  },

  HeadingText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },

  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },

  menuItem: {
    marginBottom: 10,
  },
});

export default Home;