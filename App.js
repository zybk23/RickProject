/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './src/store';
import Locations from './src/pages/Locations';
import Characters from './src/pages/Characters';
import CharacterDetails from './src/pages/CharacterDetails';
import Header from './src/components/Header';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Locations">
        <Stack.Screen
          options={{headerTitle: props => <Header />}}
          name="Locations"
          component={Locations}
        />
        <Stack.Screen
          options={{headerTitle: props => <Header />}}
          name="Characters"
          component={Characters}
        />
        <Stack.Screen
          options={{headerTitle: props => <Header />}}
          name="CharacterDetails"
          component={CharacterDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function WrapperAppComponent() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default WrapperAppComponent;
