import React from 'react';
import {
    ListView,
    RefreshControl,
    StyleSheet
} from 'react-native';

const CategoryListView = ({
                              dataSource,
                              feedId,
                              isRefreshing,
                              onEndReached,
                              onRefresh,
                              renderItem,
                              renderFooter
                          }) => (
    <ListView
        initialListSize={1}
        dataSource={dataSource}
        renderRow={renderItem}
        style={styles.listView}
        onEndReached={() => onEndReached(feedId)}
        onEndReachedThreshold={10}
        renderFooter={renderFooter}
        refreshControl={
            <RefreshControl
                style={styles.refreshControlBase}
                refreshing={isRefreshing}
                onRefresh={() => onRefresh(feedId)}
                title="Refreshing..."
                colors={['#E8751A', '#7FDFD4', '#FF467E', '#0081C6']}/>
        }/>
);

const styles = StyleSheet.create({
    listView: {
        backgroundColor: '#eeeeec'
    },
    refreshControlBase: {
        backgroundColor: 'transparent'
    }
});

export default CategoryListView;
