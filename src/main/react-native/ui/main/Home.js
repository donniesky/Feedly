import React, {Component} from 'react';
import {
    ListView,
    Text,
    View,
    StyleSheet, Image, TouchableOpacity
} from 'react-native';
import {Icon} from "react-native-elements";
import store from 'react-native-simple-store';
import Repository from "../../data/source/Repository";
import {LOCAL} from "../../data/source/local/LocalDataSource";
import SearchBar from "../../common/widget/SearchBar";

export default class Home extends Component {

    static navigationOptions = ({navigation}) => ({
        title: '首页',
        titleColor: 'white',
        header: null,
        tabBarIcon: ({tintColor}) => (
            <Icon name="home" size={25} color={tintColor}/>
        ),
        headerRight: (
            <Icon name="search" size={28} color={'white'}
                  underlayColor={'transparent'}
                  iconStyle={{marginRight: 12}}
                  onPress={() => {
                      navigation.navigate('Search');
                  }}/>
        )
    });

    constructor(props) {
        super(props);
        this.repository = new Repository();
        this.state = {
            query: '',
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

    _handleSearchChange = (query: string) => {
        this.setState({
            query: query,
        });
    };

    _handleSubmitEditing = (query: string) => {
        alert("" + query.toString());
    };

    onItemClick(rowData) {
        this.props.navigation.navigate('detail', {rowData})
    }

    renderRowItem(rowData) {
        let image = (rowData.visual != null && rowData.visual.url != null && rowData.visual.url.startsWith('http')) ?
            <Image style={{width: 110, height: 100}}
                   source={{uri: rowData.visual.url}}/> : null;
        return <TouchableOpacity
            onPress={() => this.onItemClick(rowData)}>
            <View style={styles.item}>
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
        </TouchableOpacity>
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <ListView
                    style={{paddingTop: 55}}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRowItem(rowData)}/>
                <SearchBar
                    placeholder="Find RSS you want to know..."
                    value={this.state.query}
                    onChangeText={this._handleSearchChange}
                    onSubmitEditing={this._handleSubmitEditing}
                    style={styles.searchBar}
                />
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
});
