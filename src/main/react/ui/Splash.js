import React, {Component} from 'react';
import {
    Text,
    View,
    Animated
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import store from 'react-native-simple-store';
import NavigationUtil from "../common/utils/NavigationUtil";

export default class Splash extends Component {
    static navigationOptions = {
        header: null
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
        SplashScreen.hide();
        this.timer = setTimeout(() => {
            store.get('isFirstInit').then((isFirst) => {
                if (!isFirst) {
                    navigate('Subscription', {isFirstInit: true})
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
        return (
            <Animated.Text
                style={{
                    transform: [{scale: this.state.bounceValue}]
                }}
            >Welcome !!!</Animated.Text>
        )
    }
}
