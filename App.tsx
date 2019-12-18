/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native';
import {Route} from './src/models/routes';
import LandingPage from './src/components/landingPage/landingPage';
import SavedFlows from './src/components/savedFlows/savedFlows';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationNativeContainer>
                <Tab.Navigator initialRouteName={Route.LANDING_PAGE}>
                    <Tab.Screen
                        component={LandingPage}
                        name={Route.LANDING_PAGE}
                    />
                    <Tab.Screen
                        component={SavedFlows}
                        name={Route.SAVED_FLOWS}
                    />
                </Tab.Navigator>
            </NavigationNativeContainer>
        </SafeAreaView>
    );
};

export default App;
