import React, {Component} from 'react';
import {
    View,
    WebView,
    Dimensions
} from 'react-native';

var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

export default class WebViewPage extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.data.title,
    });

    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={{flex: 1}}>
            <WebView
                style={{width: deviceWidth, height: deviceHeight}}
                source={{uri: this.props.navigation.state.params.data.originId}}/>
        </View>);
    }
}