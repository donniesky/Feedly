import React, {Component} from 'react';
import {
    Text,
    View,
    ListView,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions, ImageBackground
} from 'react-native';
import Repository from "../../data/source/Repository";

export default class Category extends Component {

    static navigationOptions = {
        title: '选择一个你感兴趣的主题',
        headerLeft: null
    };

    constructor(props) {
        super(props);
        this.repository = new Repository();
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        };
    }

    componentDidMount() {
        this.repository.fetchSuggestion()
            .then(result => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(result)
                })
            })
    }

    renderRowItem(rowData) {
        return (<TouchableOpacity style={{flex: 1}}>
            <View style={styles.card}>
                <ImageBackground
                    style={styles.image}
                    source={{uri: rowData.visual}}>
                    <Text style={styles.title}>{rowData.label}</Text>
                </ImageBackground>
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
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
        padding: 0,
        marginVertical: 5,
        borderRadius: 5,
    },
    title: {
        fontSize: 30,
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Cochin',
    },
    image: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        width: Dimensions.get('window').width,
        opacity: 0.8
    }
});