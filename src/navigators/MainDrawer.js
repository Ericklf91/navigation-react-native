import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStack from './MainStack';

const MainDrawer = createDrawerNavigator();

export default () => {
    return (
        <MainDrawer.Navigator initialRouteName="Home" >
            <MainDrawer.Screen name="Home" component={MainStack} />
            <MainDrawer.Screen name="Sobre" component={MainStack} />
            <MainDrawer.Screen name="Produtos" component={MainStack} />
        </MainDrawer.Navigator>
    );
}