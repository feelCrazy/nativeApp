/**
 * Created by ming on 2016/9/19.
 */

// listView 实现最受欢迎的日报， header使用轮播组件，可以下拉刷新，（加载更多看api返回的情况）
// 日报正文api返回的是 html，所以使用webView组件渲染

import React, {Component} from 'react';
import {View, Text, StyleSheet, ListView, TouchableOpacity, Image} from 'react-native';
import ArticleItem from '../components/ArticleItem';
import {API_LATEST} from '../data/DataRepository';
import Viewpager from 'react-native-viewpager';


class MainList extends Component {
    // 默认属性
    static defaultProps = {};

    // 属性类型
    static propTypes = {};

    // 构造
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2)=> r1 !== r2,
            sectionHeaderHasChanged: (row1, row2)=> row1 !== row2,
        });
        const pageData = new Viewpager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 初始状态
        this.state = {
            dataSource: ds,
            pagerData: pageData.cloneWithPages([]), // 初始化有问题
        };
        this.renderItem = this.renderItem.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
        this._renderSectionHeader = this._renderSectionHeader.bind(this);
        this._renderPage = this._renderPage.bind(this);
    }

    componentDidMount() {
        this.fetchData(API_LATEST);
    }

    // 自定义方法
    fetchData(url) {
        fetch(url).then((res)=>res.json())
            .then((resJson)=> {
                console.log(resJson);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(resJson.stories),
                    pagerData: this.state.pagerData.cloneWithPages(resJson.top_stories),
                });
            })
            .catch((err)=>console.log(err))
    }

    renderItem(story) {
        return (
            <ArticleItem
                story={story}/>
        )
    }

    _renderHeader() {
        console.log(this.state.pagerData, '////');
        return (
            <View style={{flex: 1, height: 200}}>
                <Viewpager
                    dataSource={this.state.pagerData}
                    isLoop={true}
                    autoPlay={true}
                    renderPage={this._renderPage}
                />
            </View>
        )
    }

    _renderPage(data, pagaID) {

        return (
            <TouchableOpacity style={{flex: 1}}>
                <Image
                    style={styles.headerItem}
                    source={{uri: data.image}}>
                    <View style={styles.headerContainer}>
                        <Text
                            numberOfLines={2}
                            style={styles.headerTitle}>
                            {data.title}
                        </Text>
                    </View>
                </Image>
            </TouchableOpacity>
        )
    }

    _renderSectionHeader(sectionData, sectionID) {
        if (this.props.theme) {
            return (
                <View></View>
            )
        } else {
            return (
                <Text style={styles.sectionHeader}>
                    今日热文
                </Text>
            )
        }
    }


    // 渲染
    render() {
        return (
            <ListView
                ref="listView"
                dataSource={this.state.dataSource}
                renderRow={this.renderItem}
                style={styles.listView}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps={true}
                showsVerticalScrollIndicator={false}
                renderHeader={this._renderHeader}
                renderSectionHeader={this._renderSectionHeader}
            />
        );
    }
}
var styles = StyleSheet.create({
    listView: {
        backgroundColor: '#fafafa',
    },
    sectionHeader: {
        fontSize: 14,
        color: '#888',
        margin: 10,
        marginLeft: 16,
    },
    headerItem: {
        flex: 1,
        height: 200,
        flexDirection: 'row'
    },
    headerContainer: {
        flex: 1,
        alignSelf: 'flex-end',
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff',
        marginBottom: 10
    }
});
export default MainList;
