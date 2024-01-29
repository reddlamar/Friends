import React from 'react';
import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerTitle: () => <Text>Friends</Text>}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{headerTitle: () => <Text>Friend Details</Text>}}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
