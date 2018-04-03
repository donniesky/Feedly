import React from 'react';
import {TabNavigator, StackNavigator, TabBarBottom} from 'react-navigation';
import Home from "../ui/main/Home";
import Subscription from "../ui/subscription/Subscription";
import Splash from "../ui/Splash";
import Category from "../ui/category/Category";
import SearchPage from "../ui/search/SearchPage";

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

export const CategoryStack = StackNavigator({
    category: {
        screen: Category
    },
    searchResult: {
        screen: SearchPage
    },
    Tabs: {
        screen: Tabs,
        navigationOptions: {
            headerLeft: null
        }
    }
});

export const Root = StackNavigator({
    Splash: {
        screen: Splash
    },
    Category: {
        screen: CategoryStack,
        navigationOptions: {
            header: null
        }
    },
    Tabs: {
        screen: Tabs,
        navigationOptions: {
            headerLeft: null
        }
    }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'orange',
        },
        headerTitleStyle: {
            alignSelf: 'center'
        },
        headerTintColor: '#fff'
    }
});