import React from 'react';
import {TabNavigator, StackNavigator, TabBarBottom} from 'react-navigation';
import Home from "../ui/main/Home";
import Settings from "../ui/Settings";
import Subscription from "../ui/subscription/Subscription";
import Splash from "../ui/Splash";

export const Tabs = TabNavigator(
    {
        Home: {screen: Home},
        Subscription: {screen: Subscription},
    },
    {
        lazy: true,
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showIcon: true,
            style: {
                backgroundColor: '#fff'
            },
            indicatorStyle: {
                opacity: 0
            },
            tabStyle: {
                padding: 0
            }
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
);

export const Root = StackNavigator({
    Splash: {
        screen: Splash
    },
    Tabs: {
        screen: Tabs,
        navigationOptions: {
            headerLeft: null
        }
    },
    Settings: {
        screen: Settings,
    },
}, {
    headerMode: 'screen',
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'orange'
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            alignItems: 'center',
            justifyContent: 'center'
        },
        headerTintColor: '#fff'
    }
});