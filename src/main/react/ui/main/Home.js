import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {Icon} from "react-native-elements";

export default class Home extends Component {

    static navigationOptions = {
        title: '首页',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="home" size={25} color={tintColor}/>
        )
    };

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Home</Text>
            </View>
        );
    }
}
