import React, {Component} from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import {Icon} from "react-native-elements";

export default class Mine extends Component {

    static navigationOptions = {
        title: '我的',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="person" size={25} color={tintColor}/>
        )
    };

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>Mine</Text>
                <Button
                    title="进入设置页面"
                    onPress={() => {
                        this.props.navigation.navigate('Settings')
                    }}/>
            </View>
        );
    }
}