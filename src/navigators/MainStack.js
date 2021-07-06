import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import SobreScreen from '../pages/SobreScreen';
import ProdutoScreen from '../pages/ProdutoScreen';
import MainDrawer from './MainDrawer';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator screenOptions={{
            headerRight: () => <Button title="Teste" onPress={()=>alert('Oi')} />
        }}>
            <MainStack.Screen name="Home" component={HomeScreen} />
            <MainStack.Screen name="Sobre" component={SobreScreen} />
            <MainStack.Screen name="Produtos" component={ProdutoScreen} />
        </MainStack.Navigator>
    );
}