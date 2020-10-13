import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookScreen from '../screens/BookScreen';
import CarrtScreen from '../screens/CartScreen';
import ShoppingCartIcon from '../components/ShoppingCartIcon';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Books" component={BookScreen} />
        <Stack.Screen
          name="Cart"
          component={CarrtScreen}
          options={{ headerRight: (props) => <ShoppingCartIcon {...props} /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
