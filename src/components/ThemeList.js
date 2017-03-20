/**
 * Created by ming on 2017/3/20
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, ListView, TouchableOpacity, Image, ToolbarAndroid} from 'react-native';
import ArticleItem from '../components/ArticleItem';
import {API_THEME} from '../data/DataRepository';

class ThemeList extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        this.state = {
            dataSource: ds,
        };
        this.renderItem = this.renderItem.bind(this);

        this._renderPage = this._renderPage.bind(this);
    }

    componentDidMount() {

        this.fetchData(this.props.theme.id)
    }

    // 自定义方法
    fetchData(id) {
        fetch(API_THEME + id).then((res) => res.json())
            .then((resJson) => {
                console.log(resJson);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(resJson.stories),

                });
            })
            .catch((err) => console.log(err))
    }

    renderItem(story) {

        return (
            <ArticleItem
                _selectItem={()=>this._selectItem(story)}
                story={story}/>
        )
    }

    _selectItem(story) {
        console.log(story);
        this.props.navigator.push({
            title: story.title,
            name: 'story',
            story: story
        });
    }

    _renderPage(data, pagaID) {
        return (
            <TouchableOpacity style={{flex: 1}} onPress={()=>this._selectItem(data)}>
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

    handleHome = () => {
        this.props.navigator.push({
            title: '主页',
            name: 'home',
        });
    };

    // 渲染
    render() {
        return (
            <View>
                <ToolbarAndroid
                    onIconClicked={this.handleHome}
                    navIcon={require('image!ic_home_24dp')}
                    title={this.props.theme.name}
                    titleColor="white"
                    style={styles.toolBar}/>
                <ListView
                    ref="listView"
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem}
                    style={styles.listView}
                    keyboardDismissMode="on-drag"
                    keyboardShouldPersistTaps={true}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        );
    }
}
ThemeList.propTypes = {};
ThemeList.defaultProps = {};
const styles = StyleSheet.create({
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
    },
    toolBar: {
        backgroundColor: '#2196F3',
        height: 56,
    }
});
export default ThemeList;
