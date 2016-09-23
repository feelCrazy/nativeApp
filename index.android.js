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

import StoryToolbar from './src/components/StoryToolbar';

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
        setTimeout(()=> {
            this.setState({
                startScreen: true,
            });

        }, 2000);
    }

    routerMapper(route, navigator) {
        if (route.name === 'home') {
            return (
                <View style={styles.container}>
                    <MainScreen navigator={navigator}/>
                    {/*<StoryToolbar/>*/}
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Text>
                        Hello!!
                    </Text>
                </View>
            );
        }
    }


    render() {
        if (this.state.startScreen) {
            let initialRoute = {name: 'home'};
            return (
                <Navigator
                    sceneStyle={styles.container}
                    initialRoute={initialRoute}
                    configureScene={()=>Navigator.SceneConfigs.FadeAndroid}
                    renderScene={this.routerMapper}
                />
            );
        } else {
            return (
                <StartScreen/>
            );
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});

AppRegistry.registerComponent('footballApp', () => footballApp);
