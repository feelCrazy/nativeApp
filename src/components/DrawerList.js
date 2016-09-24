/**
 * Created by ming on 2016/9/16.
 */

//侧边栏列表

import React, {Component} from 'react';
import {View, Text, StyleSheet, ListView, Image, TouchableNativeFeedback} from 'react-native';
import  {API_THEMES} from '../data/DataRepository';

class DrawerList extends Component {
    // 默认属性
    static defaultProps = {};

    // 属性类型
    static propTypes = {
        closeDrawer: React.PropTypes.func.isRequired,
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2)=> r1 !== r2
        });
        this.state = {
            dataSource: ds
        };
        this._renderRow = this._renderRow.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
    }

    componentDidMount() {
        this.fetchData(API_THEMES);
    }


    // 自定义方法
    _renderRow(rowData) {
        return (
            <TouchableNativeFeedback
                onPress={()=>this.props.closeDrawer(rowData)}
            >
                <View style={styles.listItem}>
                    <Text style={styles.text}>
                        {rowData.name}</Text>
                    <Image
                        source={{uri: 'ic_chevron_right'}}
                        style={styles.leftImg}/>
                </View>
            </TouchableNativeFeedback>
        )
    }

    fetchData(url) {
        fetch(url)
            .then((res)=>res.json())
            .then((resJson)=> {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(resJson.others)
                });

            })
            .catch((err)=> {
                console.log(err);
                this.setState({
                    dataSource: this.state.dataSource
                });

            })
            .done()
    }

    _renderHeader() {
        return (
            <View style={styles.header}>

                <View style={styles.headerCon}>
                    <Image
                        style={styles.headerImg}
                        source={{uri: 'ic_account_circle'}}
                    />
                    <Text style={styles.headerText}>
                        Hello!
                    </Text>
                </View>

                <TouchableNativeFeedback onPress={()=>this.props.closeDrawer(null)}>
                    <View style={styles.headerHome}>
                        <Image
                            source={{uri: 'ic_home'}}
                            style={styles.homeImg}
                        />
                        <Text style={styles.homeText}>主页</Text>
                    </View>
                </TouchableNativeFeedback>

            </View>

        );
    }

    // 渲染
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    style={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    renderHeader={this._renderHeader}
                />
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    text: {
        fontSize: 16,
        color: '#B0B0B0',
        marginLeft: 20,
        width: 200,
    },
    list: {
        flex: 1,
    },
    headerCon: {
        backgroundColor: '#2195f2',
        flexDirection: 'row',
    },
    header: {
        flexDirection: 'column',
    },
    headerImg: {
        marginLeft: 20,
        marginTop: 20,
        height: 55,
        width: 55,
    },
    headerText: {
        marginTop: 35,
        paddingLeft: 25,
        fontSize: 16,
        color: '#fff',
        height: 30,
    },
    headerHome: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginTop: 5,

    },
    homeImg: {
        marginLeft: 30,
        height: 30,
        width: 30,
    },
    homeText: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 10,
        paddingTop: 5,
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    leftImg: {
        width: 25,
        height: 25
    }

});
export default DrawerList;
