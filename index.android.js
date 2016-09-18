/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import StartScreen from './src/components/StartScreen';
import MainScreen from './src/components/MainScreen';

class footballApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startScreen: false,
        };
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({
                startScreen: true,
            });

        }, 2000);
    }


    render() {
        if (this.state.startScreen) {
            return (
                <MainScreen/>
            );
        } else {
            return (
                <StartScreen/>
            );
        }


    }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('footballApp', () => footballApp);
