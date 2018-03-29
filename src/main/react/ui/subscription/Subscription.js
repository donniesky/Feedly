import React, {Component} from 'react';
import {
    Text,
    View,
    ListView
} from 'react-native';
import {Icon} from "react-native-elements";

export default class Subscription extends Component {

    static navigationOptions = ({navigation}) => ({
        title: '订阅',
        tabBarIcon: ({tintColor}) => (
            <Icon name="label" size={25} color={tintColor}/>
        )
    });

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }

    renderRowItem() {
        return (<View style={{flex: 1}}>

        </View>);
    }

    render() {
        return (<View style={{flex: 1}}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderRowItem()}
            />
        </View>);
    }
}