/**
 * Created by ming on 2016/9/19.
 */

// listView 实现最受欢迎的日报， header使用轮播组件，可以下拉刷新，（加载更多看api返回的情况）

import React, {Component} from 'react';
import {View, Text, StyleSheet, ListView} from 'react-native';
import ArticleItem from '../components/ArticleItem';
import  {API_LATEST} from '../data/DataRepository';
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
        const pager = new Viewpager.DataSource({
            pageHasChanged: (p1, p2)=>p1 !== p1,
        });
        // 初始状态
        this.state = {
            dataSource: ds,
            pagerData: pager,
        };
        this.renderItem = this.renderItem.bind(this);
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
        return (
            <View>
                <Viewpager/>
            </View>
        )
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
            />
        );
    }
}
var styles = StyleSheet.create({
    listView: {
        backgroundColor: '#fafafa',
    }
});
export default MainList;
