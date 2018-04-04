import React, {Component} from 'react';
import {
    Text,
    View,
    Animated
} from 'react-native';
import store from 'react-native-simple-store';
import NavigationUtil from "../common/utils/NavigationUtil";

export default class Splash extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(1)
        }
    }

    componentDidMount() {
        const {navigate} = this.props.navigation;
        Animated.timing(this.state.bounceValue, {
            toValue: 1.2,
            duration: 1000
        }).start();
        this.timer = setTimeout(() => {
            store.get('isFirstInit').then((isFirst) => {
                if (!isFirst) {
                    NavigationUtil.reset(this.props.navigation, 'Category');
                    //navigate('Category', {isFirstInit: true})
                } else {
                    NavigationUtil.reset(this.props.navigation, 'Home');
                }
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (<View style={{
                flex: 1,
                justifyContent: 'center'
            }}>
                <Animated.Text
                    style={{
                        fontSize: 50,
                        transform: [{scale: this.state.bounceValue}]
                    }}>Welcome !!!</Animated.Text>
            </View>
        )
    }
}
