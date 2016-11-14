/**
 * Created by ming on 2016/9/19.
 */

//主页文章列表Item

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableNativeFeedback} from 'react-native';


class ArticleItem extends Component {
    // 默认属性
    static defaultProps = {};

    // 属性类型
    static propTypes = {};

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.setColor = this.setColor.bind(this);
    }

    // 自定义方法
    setColor() {
        // console.log(this.props);
        this.refs.title.setNativeProps({style: {color: '#777'}});
        this.props._selectItem();
    }

    // 渲染
    render() {
        let image = null;
        if (this.props.story.images && this.props.story.images[0]) {
            image = <Image
                source={{uri: this.props.story.images[0]}}
                style={styles.image}
            />
        }
        return (
            <View {...this.props}>
                <TouchableNativeFeedback
                    onPress={this.setColor}>
                    <View style={styles.row}>
                        <Text
                            ref="title"
                            style={styles.storyText}
                            numberOfLines={3}>
                            {this.props.story.title}
                        </Text>
                        {image}
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginVertical: 5,
        borderColor: '#ddd',
        borderStyle: null,
        borderWidth: 0.5,
        borderRadius: 2,

    },
    image: {
        backgroundColor: '#ddd',
        height: 60,
        width: 80,
        marginLeft: 10,
    },
    storyText: {
        flex: 1,
        fontSize: 16,
        color: '#333333',
    }
});
export default ArticleItem;
