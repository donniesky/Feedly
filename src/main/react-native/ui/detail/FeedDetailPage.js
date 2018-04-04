import React, {Component} from 'react';
import {
    ListView,
    Text,
    View,
    StyleSheet,
    Image,
    WebView,
    Dimensions
} from 'react-native';
import {Icon} from "react-native-elements";

var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

export default class FeedDetailPage extends Component {

    static navigationOptions = ({navigation}) => ({
        title: '详情页',
        headerTitleStyle: {
            alignSelf: 'center',
            color: 'white'
        },
        headerRight: (
            <Icon name="public" size={25} color={'white'}
                  iconStyle={{marginRight: 12}}
                  underlayColor={'transparent'}
                  onPress={() => {
                      navigation.navigate('webView', {data: navigation.state.params.rowData});
                  }}/>
        )
    });

    constructor(props) {
        super(props);
    }

    getStyle() {
        return '<style type="text/css">' +
            'html {\n' +
            '\tbackground: transparent;\n' +
            '}\n' +
            '\n' +
            'body {\n' +
            '\tfont: normal 16px/1.5 "Helvetica Neue", Arial, sans-serif;\n' +
            '\ttext-align: left;\n' +
            '\tword-wrap: break-word;\n' +
            '\tcolor: #444444;\n' +
            '}\n' +
            '\n' +
            'body.dark {\n' +
            '\tbackground: #1A1A1A;\n' +
            '\tcolor: #808080;\n' +
            '}\n' +
            '\n' +
            '\n' +
            '* {\n' +
            '\tmargin: 0;\n' +
            '\tpadding: 0;\n' +
            '\tfont-size: 100%;\n' +
            '\tfont-style: normal;\n' +
            '\tfont-weight: normal;\n' +
            '\ttext-decoration: none;\n' +
            '\tborder: none;\n' +
            '\toutline: none;\n' +
            '\t-webkit-tap-highlight-color: rgba(125, 181, 236, 0.5);\n' +
            '}\n' +
            '\n' +
            '\n' +
            'a {\n' +
            '\tcolor: #0084FF;\n' +
            '}\n' +
            '\n' +
            '.dark a {\n' +
            '\tcolor: #3A76D0;\n' +
            '}\n' +
            '\n' +
            '\n' +
            'blockquote {\n' +
            '\tvertical-align: baseline;\n' +
            '\tmargin: 16px 0;\n' +
            '\tpadding: 0 16px;\n' +
            '\tfont-size: 100%;\n' +
            '\tfont-style: normal;\n' +
            '\tborder-left: 3px solid #D0E5F2;\n' +
            '}\n' +
            '\n' +
            'blockquote p {\n' +
            '\tmargin: 0;\n' +
            '}\n' +
            '\n' +
            'blockquote ol, blockquote ul {\n' +
            '\tmargin: 0 0 0 16px;\n' +
            '}\n' +
            '\n' +
            '.dark blockquote {\n' +
            '\tborder-left: 3px solid #49A1CD;\n' +
            '}\n' +
            '\n' +
            '\n' +
            'h1 {\n' +
            '\tmargin-top: 4px;\n' +
            '\tmargin-bottom: 4px;\n' +
            '\tfont-size: 22px;\n' +
            '\tcolor: #444;\n' +
            '}\n' +
            '\n' +
            'h2 {\n' +
            '\tmargin-top: 4px;\n' +
            '\tmargin-bottom: 4px;\n' +
            '\tfont-size: 20px;\n' +
            '\tcolor: #444;\n' +
            '}\n' +
            '\n' +
            'h3 {\n' +
            '\tmargin-top: 4px;\n' +
            '\tmargin-bottom: 4px;\n' +
            '\tfont-size: 18px;\n' +
            '\tcolor: #444;\n' +
            '}\n' +
            '\n' +
            'h4 {\n' +
            '\tmargin-top: 4px;\n' +
            '\tmargin-bottom: 4px;\n' +
            '\tfont-size: 16px;\n' +
            '\tcolor: #444;\n' +
            '}\n' +
            '\n' +
            'h5, h6 {\n' +
            '\tmargin-top: 4px;\n' +
            '\tmargin-bottom: 4px;\n' +
            '\tfont-size: 14px;\n' +
            '\tcolor: #444;\n' +
            '}\n' +
            '\n' +
            '.dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {\n' +
            '\tcolor: #808080;\n' +
            '}\n' +
            '\n' +
            '/* ============================================================================================== */\n' +
            '\n' +
            'img {\n' +
            '\tdisplay: block;\n' +
            '\tvertical-align: middle;\n' +
            '\tmargin: 16px 0;\n' +
            '\tfont-size: 0;\n' +
            '\tmax-width: 100%;\n' +
            '\tcolor: transparent;\n' +
            '\twidth: auto;\n' +
            '\theight: auto;\n' +
            '\tborder: 0;\n' +
            '\t-ms-interpolation-mode: bicubic\n' +
            '}\n' +
            '\n' +
            'img[eeimg] {\n' +
            '\tmax-width: 100%;\n' +
            '\tvertical-align: middle;\n' +
            '}\n' +
            '\n' +
            'img[eeimg="1"] {\n' +
            '\tdisplay: inline-block;\n' +
            '\tmargin: 0 2px;\n' +
            '}\n' +
            '\n' +
            'img[eeimg="2"] {\n' +
            '\tdisplay: block;\n' +
            '\tmargin: 8px auto;\n' +
            '}\n' +
            '\n' +
            '.dark img {\n' +
            '\topacity: 0.8;\n' +
            '}\n' +
            '\n' +
            '.dark :not(.image-holder) img[eeimg] {\n' +
            '\t-webkit-filter: invert(1);\n' +
            '}\n' +
            '\n' +
            '\n' +
            'p {\n' +
            '\tmargin: 16px 0;\n' +
            '}\n' +
            '\n' +
            'p + br {\n' +
            '\tdisplay: none;\n' +
            '}\n' +
            '\n' +
            '\n' +
            'i {\n' +
            '\tfont-style: italic;\n' +
            '}\n' +
            '\n' +
            'strong, b {\n' +
            '\tfont-weight: bold;\n' +
            '\tmargin-bottom: 8px;\n' +
            '}\n' +
            '\n' +
            'u {\n' +
            '\ttext-decoration: underline;\n' +
            '}\n' +
            '\n' +
            '\n' +
            'ul {\n' +
            '\tmargin: 16px 0 16px 16px;\n' +
            '\tlist-style: disc;\n' +
            '}\n' +
            '\n' +
            'ol {\n' +
            '\tmargin: 16px 0 16px 16px;\n' +
            '\tlist-style: decimal;\n' +
            '}\n' +
            '\n' +
            'ul + br, ol + br {\n' +
            '\tdisplay: none;\n' +
            '}' + '</style>';
    }

    render() {
        return (<View style={{flex: 1}}>
            <WebView
                style={{
                    width: deviceWidth,
                    height: deviceHeight,
                    padding: 10
                }}
                source={{html: this.getStyle() + this.props.navigation.state.params.rowData.summary.content}}/>
        </View>);
    }

}