import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {Icon} from "react-native-elements";

export default class Settings extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '设置',
        tabBarIcon: ({tintColor}) => (
            <Icon name="settings" size={25} color={tintColor}/>
        )
    });

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings</Text>
            </View>
        );
    }
}