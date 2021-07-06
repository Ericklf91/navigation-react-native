import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainDrawer from './src/navigators/MainDrawer';

const App = () => {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
}

export default App;