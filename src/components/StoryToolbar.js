/**
 * Created by ming on 2016/9/22.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ToastAndroid,
    TouchableNativeFeedback,
    Image,
} from 'react-native';


class StoryToolbar extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isLoading: true,
            extra: null,
        };
    }


    // 自定义方法
    _pressBack() {
        if (this.props.navigator) {
            this.props.navigator.pop();
        }
    }

    // 渲染
    render() {
        return (
            <View {...this.props} style={{backgroundColor: '#2196F3'}}>
                <View style={styles.actionCont}>
                    <TouchableNativeFeedback onPress={()=>this._pressBack()}>
                        <View style={styles.actionItem}>
                            <Image
                                source={{uri: 'ic_arrow_back'}}
                                style={styles.backIcon}
                                resizeMode="contain"/>
                        </View>
                    </TouchableNativeFeedback>

                    <View style={{flex: 1}}/>
                    <TouchableNativeFeedback>
                        <View style={styles.actionItem}>
                            <Image
                                source={require('image!ic_comment')}
                                style={styles.itemIcon}
                                resizeMode="contain"/>
                            <Text style={styles.textCount}>
                                100
                            </Text>
                        </View>
                    </TouchableNativeFeedback>


                    <TouchableNativeFeedback>
                        <View style={styles.actionItem}>
                            <Image
                                source={require('image!ic_thumb_up')}
                                style={styles.itemIcon}
                                resizeMode="contain"/>
                            <Text style={styles.textCount}>
                                100
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    actionCont: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionItem: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 14,
        paddingRight: 8
    },
    backIcon: {
        width: 30,
        height: 30,

    },
    itemIcon: {
        width: 26,
        height: 26,
    },
    textCount: {
        fontSize: 16,
        color: '#fff',
        marginLeft: 5,
    }
});

StoryToolbar.propTypes = {
    navigator: React.PropTypes.object.isRequired,
};
export default StoryToolbar;
