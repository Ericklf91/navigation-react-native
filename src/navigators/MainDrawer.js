import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStackNavigation, CadastroStackNavigation, ProdutoStackNavigation } from './MainStack';

const MainDrawer = createDrawerNavigator();

export default () => {
    return (
        <MainDrawer.Navigator initialRouteName="Home" >
            <MainDrawer.Screen name="Home" component={HomeStackNavigation} />
            <MainDrawer.Screen name="Cadastro" component={CadastroStackNavigation} />
            <MainDrawer.Screen name="Produtos" component={ProdutoStackNavigation} />
        </MainDrawer.Navigator>
    );
}