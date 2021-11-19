import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AttractionListScreen} from './screens/attractionList';
import AttractionCardScreen from './screens/attractionCard';
import HomeScreen from './screens/Home';
import LikedLocationsScreen from './screens/likedLocations';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lugares">
        <Stack.Screen name="Bem-vindo!" component={HomeScreen} />
        <Stack.Screen name="Lugares" component={AttractionListScreen} />
        <Stack.Screen name="Informações" component={AttractionCardScreen} />
        <Stack.Screen name="Curtidos" component={LikedLocationsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;