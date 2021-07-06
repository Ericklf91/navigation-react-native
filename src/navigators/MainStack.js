import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import CadastroScreen from '../pages/CadastroScreen';
import ProdutoScreen from '../pages/ProdutoScreen';

const HomeStack = createStackNavigator();

export const HomeStackNavigation = ({ navigation }) => {
    return (
        <HomeStack.Navigator screenOptions={{           
            headerRight: () =>
                <TouchableOpacity style={{ padding: 10 }}
                    onPress={() => navigation.toggleDrawer()} >
                    <Image style={{ height: 48, width: 48 }}
                        source={{ uri: 'https://static.thenounproject.com/png/167204-200.png' }} />
                </TouchableOpacity>,
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
    );
}

const CadastroStack = createStackNavigator();

export const CadastroStackNavigation = ({ navigation }) => {
    return (
        <CadastroStack.Navigator screenOptions={{           
            headerRight: () =>
                <TouchableOpacity style={{ padding: 10 }}
                    onPress={() => navigation.toggleDrawer()} >
                    <Image style={{ height: 48, width: 48 }}
                        source={{ uri: 'https://static.thenounproject.com/png/167204-200.png' }} />
                </TouchableOpacity>,
        }}>
            <CadastroStack.Screen name="Cadastro" component={CadastroScreen} />
        </CadastroStack.Navigator>
    );
}

const ProdutoStack = createStackNavigator();

export const ProdutoStackNavigation = ({ navigation }) => {
    return (
        <ProdutoStack.Navigator screenOptions={{          
            headerRight: () =>
                <TouchableOpacity style={{ padding: 10 }}
                    onPress={() => navigation.toggleDrawer()} >
                    <Image style={{ height: 48, width: 48 }}
                        source={{ uri: 'https://static.thenounproject.com/png/167204-200.png' }} />
                </TouchableOpacity>,
        }}>
            <ProdutoStack.Screen name="Produtos" component={ProdutoScreen} />
        </ProdutoStack.Navigator>
    );
}