import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';


const Menu = ({ navigation, route }: any) => {

  const { menuItems } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      
      {/* Display the menu items */}
      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.dishName}>{item.dishName}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
            <Text>{item.course}</Text>

            {/* Button to navigate to DishDetail screen */}
            <Button
              title="View Details"
              onPress={() => navigation.navigate('DishDetail', { item })}
            />
            {/* Button to navigate to EditDish screen */}
            <Button
              title="Edit"
              onPress={() => navigation.navigate('EditDish', { item })}
            />
          </View>
        )}
      />
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  menuItem: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },

  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

// Export the Menu component as the default export
export default Menu;