/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Navigator
} from 'react-native';
import StartScreen from './src/components/StartScreen';
import MainScreen from './src/components/MainScreen';
import StoryScreen from './src/components/StoryScreen';

// 使用Navigator 导航栏，还需要慢慢摸索使用

class footballApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startScreen: false,
        };
        this.routerMapper = this.routerMapper.bind(this);
    }

    componentDidMount() {
    }

    routerMapper(route, navigator) {
        if (route.name === 'start') {
            return (
                <StartScreen navigator={navigator}/>
            )
        } else if (route.name === 'home') {
            return (
                <View style={styles.container}>
                    <MainScreen navigator={navigator}/>
                </View>
            );
        } else if (route.name === 'story') {
            return (
                <StoryScreen navigator={navigator}/>
            );
        }
    }


    render() {
        let initialRoute = {name: 'start'};
        return (
            <Navigator
                sceneStyle={styles.container}
                initialRoute={initialRoute}
                configureScene={()=>Navigator.SceneConfigs.FadeAndroid}
                renderScene={this.routerMapper}
            />
        );


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});

AppRegistry.registerComponent('footballApp', () => footballApp);
