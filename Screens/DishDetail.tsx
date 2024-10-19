import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const DishDetail = ({ route, navigation }: any) => {
 
  const { item } = route.params;

  return (
    <View style={styles.container}>
   
      <Text style={styles.dishName}>{item.dishName}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>Price: {item.price}</Text>
      <Text style={styles.course}>Course: {item.course}</Text>

     
      <Button
        title="Back to Menu"
        onPress={() => navigation.goBack()}
      />
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

  dishName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    marginBottom: 10,
  },

  price: {
    fontSize: 16,
    marginBottom: 10,
  },

  course: {
    fontSize: 16,
    marginBottom: 20,
  },
});

// Export the DishDetail component as the default export
export default DishDetail;