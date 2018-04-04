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
import SearchBar from "../../common/widget/SearchBar";

export default class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            sort: '#'
        };
    }

    _handleSearchChange = (query: string) => {
        if (this.state.query === query) {
            return;
        }
        this.setState({
            query,
        });
    };

    render() {
        return (<View>
            <SearchBar
                placeholder="Find RSS you want to know..."
                value={this.state.query}
                onChangeText={this._handleSearchChange}
                style={styles.searchBar}
            />
        </View>);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    searchBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
});
