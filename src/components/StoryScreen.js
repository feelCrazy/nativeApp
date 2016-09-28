/**
 * Created by ming on 2016/9/22.
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StoryToolbar from './StoryToolbar'

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
            <View style={styles.container}>
                <StoryToolbar navigator={this.props.navigator}/>
                <Text>
                    StoryScreen
                </Text>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    }
});
export default StoryScreen;
