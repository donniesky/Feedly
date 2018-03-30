import React, {Component} from 'react';
import {
    Text,
    View,
    ListView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {Icon} from "react-native-elements";
import categories from '../../../assets/subscription';

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
            dataSource: ds.cloneWithRows(categories),
        };
    }

    renderRowItem(rowData) {
        return (<TouchableOpacity style={{flex: 1}}>
            <View style={[styles.card, {backgroundColor: rowData.color}]}>
                <Text style={styles.title}>{rowData.tag}</Text>
            </View>
        </TouchableOpacity>);
    }

    render() {
        return (<View style={{flex: 1}}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderRowItem(rowData)}
            />
        </View>);
    }
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
        padding: 10,
        marginVertical: 3,
        borderWidth: 0.5,
        borderRadius: 2,
        borderColor: 'red'
    },
    title: {
        paddingTop: 20,
        paddingBottom: 20
    }
});