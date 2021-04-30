import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import FlashMessage from 'react-native-flash-message';

import Splash from './screens/Splash';

import Home from './screens/Home';

const Stack = createStackNavigator();

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Splash"
                        component={Splash}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
                <FlashMessage position="top" />
            </NavigationContainer>
        );
    }
}
