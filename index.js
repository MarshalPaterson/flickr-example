import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import PhotoListScreen from './src/screens/PhotoListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// Create a component
const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="photoList"
        component={PhotoListScreen}
        options={{title: 'Photos'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => App);
