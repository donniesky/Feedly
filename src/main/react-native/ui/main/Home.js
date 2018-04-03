import React, {Component} from 'react';
import {
    ListView,
    Text,
    View,
    StyleSheet, Image
} from 'react-native';
import {Icon} from "react-native-elements";
import store from 'react-native-simple-store';
import Repository from "../../data/source/Repository";
import {LOCAL} from "../../data/source/local/LocalDataSource";

export default class Home extends Component {

    static navigationOptions = {
        title: '首页',
        tabBarIcon: ({tintColor}) => (
            <Icon name="home" size={25} color={tintColor}/>
        )
    };

    constructor(props) {
        super(props);
        this.repository = new Repository();
        this.state = {
            feedIds: [],
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        };
    }

    componentDidMount() {
        store.get(LOCAL.param_feed_id)
            .then(feedIds => {
                this.setState({
                    feedIds: feedIds
                });
                this.repository.fetchFeedContents(this.state.feedIds.toString(), 20)
                    .then(result => {
                        this.setState({
                            dataSource: this.state.dataSource.cloneWithRows(result.items)
                        });
                    }).then(error => {
                    console.log(error)
                })
            });
    }

    renderRowItem(rowData) {
        let image = (rowData.visual != null && rowData.visual.url != null && rowData.visual.url.startsWith('http')) ?
            <Image style={{width: 110, height: 100}}
                   source={{uri: rowData.visual.url}}/> : null;
        return <View style={styles.item}>
            {image}
            <View style={{
                flex: 1,
                margin: 10
            }}>
                <Text style={{fontSize: 14}}>{rowData.origin.title}</Text>
                <Text numberOfLines={3} style={{
                    fontSize: 18,
                    color: 'black'
                }}>{rowData.title}</Text>
            </View>

        </View>
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRowItem(rowData)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'orange',
        flexDirection: 'row'
    }
});
