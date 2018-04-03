import React, {Component} from 'react';
import {
    Text,
    View,
    ListView,
    StyleSheet, Button, Image
} from 'react-native';
import store from 'react-native-simple-store';
import Repository from "../../data/source/Repository";
import {LOCAL} from "../../data/source/local/LocalDataSource";
import NavigationUtil from "../../common/utils/NavigationUtil";

let tempFeedIds = [];

export default class SearchPage extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.rowData.label,
    });

    constructor(props) {
        super(props);
        this.repository = new Repository();
        this.state = {
            checked: false,
            feedIds: tempFeedIds,
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        };
    }

    componentDidMount() {
        this.repository.search(this.props.navigation.state.params.rowData.label,
            20).then(result => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(result.results)
            });
        });
    }

    onClick(rowData) {
        const {navigate} = this.props.navigation;
        tempFeedIds.push(rowData.feedId);
        this.setState({
            feedIds: tempFeedIds
        });
        store.save(LOCAL.param_feed_id, this.state.feedIds);
        NavigationUtil.reset(this.props.navigation, 'Tabs');
    }

    renderRowItem(rowData) {
        return (<View style={styles.item}>
            <Image
                style={{width: 80, height: 80}}
                source={{uri: rowData.visualUrl}}/>
            <View style={styles.content}>
                <Text style={styles.title}>{rowData.title}</Text>
                <Text numberOfLines={2}>{rowData.description}</Text>
            </View>

            <Button title='订阅'
                    onPress={() => this.onClick(rowData)}/>
        </View>)
    }

    render() {
        return (<View style={styles.container}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderRowItem(rowData)}/>
        </View>)
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    item: {
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        color: 'black'
    },
    content: {
        flex: 1,
        marginLeft: 8,
        marginRight: 8,
        alignItems: 'flex-start'
    },
});
