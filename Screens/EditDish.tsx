import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const EditDish = ({ route, navigation }: any) => {
  // Get the dish data passed from the Menu screen via the route parameters
  const { item, updateDish } = route.params;

  // Local state to store the updated dish details
  const [dishName, setDishName] = useState(item.dishName);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [course, setCourse] = useState(item.course);

  // Function to handle saving the changes
  const handleSave = () => {
    // Call the updateDish function passed as a prop to update the dish
    updateDish(item.id, { dishName, description, price, course });

    // Navigate back to the Menu screen after saving
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Dish</Text>

      {/* Dish Name Input */}
      <Text style={styles.label}>Dish Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />

      {/* Description Input */}
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      {/* Price Input */}
      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
      />

      {/* Course Input */}
      <Text style={styles.label}>Course (e.g., Starter, Main, Dessert):</Text>
      <TextInput
        style={styles.input}
        placeholder="Course"
        value={course}
        onChangeText={setCourse}
      />

      {/* Save Button */}
      <Button title="Save Changes" onPress={handleSave} />


      <Button title="Cancel" onPress={() => navigation.goBack()} />
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  label: {
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
});

// Export the EditDish component as the default export
export default EditDish;