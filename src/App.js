import 'react-native-gesture-handler';
import React from 'react';
import PhotoListScreen from './screens/PhotoListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// imports Provider and store
import { Provider } from 'mobx-react';
import store from './store';

const Stack = createStackNavigator();

// Create a component
const App = () => (
    <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="photoList"
                    component={PhotoListScreen}
                    options={{ title: 'Photos' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
);
export default App;
