/**
 * Created by ming on 2016/9/22.
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, WebView} from 'react-native';
import StoryToolbar from './StoryToolbar';
import {API_NEWS} from '../data/DataRepository';


class StoryScreen extends Component {
    // 默认属性
    static defaultProps = {};

    // 属性类型
    static propTypes = {};

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isLoad: false,
            detail: null,
        };
    }

    componentDidMount() {
        this.getFetch(this.props.story.id)
    }

    getFetch = (id) => {
        fetch(API_NEWS + id).then((res) => res.json())
            .then((resJson) => {
                console.log(resJson);
                this.setState({
                    isLoad: true,
                    detail: resJson
                });
            })
            .catch(() => {
                this.setState({
                    isLoad: false,
                    detail: null
                });

            })
    }

    // 渲染
    render() {
        if (this.state.isLoad && this.state.detail.body) {
            let html = '<!DOCTYPE html><html><head><link rel="stylesheet" type="text/css" href="'
                + this.state.detail.css[0]
                + '" /></head><body><div style="position: relative;"><div style="position: absolute;height:200;width:100%;"> <img src="' + this.state.detail.image + '" style="width:100%;height:200px;background-size:contain"> </div>' + this.state.detail.body
                + '</div></body></html>';
            return (
                <View style={styles.container}>
                    <StoryToolbar navigator={this.props.navigator}/>
                    <WebView
                        source={{html: html}}/>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <StoryToolbar navigator={this.props.navigator}/>
                    <Text>
                        正在加载...
                    </Text>
                </View>
            );
        }

    }
}
let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    }
});
StoryScreen.propTypes = {
    story: React.PropTypes.object.isRequired,
};
export default StoryScreen;
