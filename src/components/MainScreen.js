/**
 * Created by ming on 2016/9/16.
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, DrawerLayoutAndroid, ToolbarAndroid} from 'react-native';
import DrawerList from '../components/DrawerList';
import MainList from '../components/MainList';

const DRAWER = 'drawer';
const toolActions = [
    {
        title: '设置', show: 'always',
        title: '其他', show: 'never'
    }
];

class MainScreen extends Component {
    // 默认属性
    static defaultProps = {};

    // 属性类型
    static propTypes = {};

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.renderList = this.renderList.bind(this);
    }

    // 自定义方法
    renderList() {
        return (
            <DrawerList/>
        );
    }

    // 渲染
    render() {
        return (
            <DrawerLayoutAndroid
                ref={DRAWER}
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                keyboardDismissMode="on-drag"
                renderNavigationView={this.renderList}>
                <View style={styles.container}>
                    <ToolbarAndroid
                        onIconClicked={()=>this.refs[DRAWER].openDrawer()}
                        navIcon={require('image!ic_menu_24dp')}
                        actions={toolActions}
                        style={styles.toolBar}/>
                    <MainList/>
                </View>


            </DrawerLayoutAndroid>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fafafa',
    },
    toolBar: {
        backgroundColor: '#2196F3',
        height: 56,
    }
});
export default MainScreen;
