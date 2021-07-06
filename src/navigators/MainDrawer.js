import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../pages/HomeScreen';
import SobreScreen from '../pages/SobreScreen';
import ProdutoScreen from '../pages/ProdutoScreen';

const MainDrawer = createDrawerNavigator();

export default () => {
    return (
        <MainDrawer.Navigator>
            <MainDrawer.Screen name="Home" component={HomeScreen} />
            <MainDrawer.Screen name="Sobre" component={SobreScreen} />
            <MainDrawer.Screen name="Produtos" component={ProdutoScreen} />
        </MainDrawer.Navigator>
    );
}