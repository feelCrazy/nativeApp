/**
 * Created by ming on 2016/9/16.
 */

//主屏幕

import React, {Component} from 'react';
import {View, StyleSheet, DrawerLayoutAndroid, ToolbarAndroid, Dimensions} from 'react-native';
import DrawerList from '../components/DrawerList';
import MainList from '../components/MainList';

const DRAWER = 'drawer';
const WIDTH = Dimensions.get('window').width - 96;
const toolActions = [
    {
        title: '设置', show: 'always',
        title: '其他', show: 'never',
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
        this.state = {
            title: null,
        };
        this.renderList = this.renderList.bind(this);
        this._closeDrawer = this._closeDrawer.bind(this);
    }

    // 自定义方法
    renderList() {
        return (
            <DrawerList
                navigator={this.props.navigator}
                closeDrawer={this._closeDrawer}/>
        );
    }

    _closeDrawer(title) {
        console.log('--', title);
        this.refs[DRAWER].closeDrawer();
        this.setState({
            title: title,
        });

    }

    // 渲染
    render() {
        let title = this.state.title ? this.state.title.name : '首页';
        return (
            <DrawerLayoutAndroid
                ref={DRAWER}
                drawerWidth={WIDTH}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                keyboardDismissMode="on-drag"
                renderNavigationView={this.renderList}>
                <View style={styles.container}>
                    <ToolbarAndroid
                        onIconClicked={()=>this.refs[DRAWER].openDrawer()}
                        navIcon={require('image!ic_menu_24dp')}
                        title={title}
                        titleColor="white"
                        actions={toolActions}
                        style={styles.toolBar}/>
                    <MainList navigator={this.props.navigator}/>
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
