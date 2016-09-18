/**
 * Created by ming on 2016/9/16.
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, DrawerLayoutAndroid} from 'react-native';
import DrawerList from '../components/DrawerList';


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
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={this.renderList}
            >

            </DrawerLayoutAndroid>
        );
    }
}
var styles = StyleSheet.create({
    bg: {
        backgroundColor: 'red'
    }
});
export default MainScreen;
