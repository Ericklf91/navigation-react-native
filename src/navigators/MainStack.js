import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import SobreScreen from '../pages/SobreScreen';
import ProdutoScreen from '../pages/ProdutoScreen';
import MainDrawer from './MainDrawer';

const MainStack = createStackNavigator();

export default ({navigation}) => {
    return (
        <MainStack.Navigator screenOptions={{
            headerRight: () =>
                <TouchableOpacity style={{ padding: 10 }}
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Image style={{ height: 48, width: 48 }}
                        source={{ uri: 'https://static.thenounproject.com/png/167204-200.png' }} />
                </TouchableOpacity>
        }}>
            <MainStack.Screen name="Home" component={HomeScreen} />
            <MainStack.Screen name="Sobre" component={SobreScreen} />
            <MainStack.Screen name="Produtos" component={ProdutoScreen} />
        </MainStack.Navigator>
    );
}