import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { Ionicons } from '@expo/vector-icons'; 

// Import screen components
import Home from './Screens/Home'; // Screen for the home page
import Menu from './Screens/Menu'; // Screen for the menu page
import DishDetail from './Screens/DishDetail'; // Screen to view details of a specific dish
import EditDish from './Screens/EditDish'; // Screen for editing a dish
import Settings from './Screens/Settings'; // Screen for settings page

// Create navigators
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid" size={30} color={'royalblue'} />
            ),
          }}
        />
        <Tabs.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="restaurant" size={30} color={'royalblue'} />
            ),
          }}
        />
        <Tabs.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={30} color={'royalblue'} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}








  





