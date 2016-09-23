/**
 * Created by ming on 2016/9/22.
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class StoryScreen extends Component {
    // 默认属性
    static defaultProps = {};

    // 属性类型
    static propTypes = {};

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    // 自定义方法
    handle() {

    }

    // 渲染
    render() {
        return (
            <View>
                <Text style={styles.textDefault}>
                    StoryScreen
                </Text>
            </View>
        );
    }
}
var styles = StyleSheet.create({});
export default StoryScreen;
