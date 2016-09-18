/**
 * Created by ming on 2016/9/15.
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Animated, Dimensions} from 'react-native';
import {API_START} from '../data/DataRepository';
var WINDOW_WIDTH = Dimensions.get('window').width;

class StartScreen extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: null,
            bounceValue: new Animated.Value(1),
        };
    }

    componentDidMount() {
        this.fetchData(API_START);
        this.state.bounceValue.setValue(1);
        Animated.timing(
            this.state.bounceValue,
            {
                toValue: 1.3,
                duration: 5000,
            }
        ).start();
    }

    // 自定义方法
    fetchData(url) {
        fetch(url)
            .then((res)=>res.json())
            .then((resJson)=> {
                console.log(resJson);
                this.setState({
                    data: resJson.img,
                });

            })
            .done();
    }

    // 渲染
    render() {
        let img;
        if (this.state.data) {
            img = {uri: this.state.data};
        } else {
            img = require('../images/splash.png');
        }
        return (
            <View style={styles.container}>
                <Animated.Image
                    source={img}
                    style={{
                        flex: 1,
                        width: WINDOW_WIDTH,
                        height: 1,
                        transform: [
                            {scale: this.state.bounceValue},
                        ]
                    }}
                />
                <Text style={styles.title}>
                    知乎日报
                </Text>
                <Image
                    style={styles.logo}
                    source={require('../images/logo.png')}
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
    title: {
        flex: 1,
        fontSize: 16,
        color: '#fff',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 10,
        textAlign: 'center',
        backgroundColor: 'transparent',
    },
    logo: {
        resizeMode: 'contain',
        position: 'absolute',
        left: 125,
        right: 0,
        bottom: 30,
        height: 54,
        backgroundColor: 'transparent',

    }

});
export default StartScreen;
