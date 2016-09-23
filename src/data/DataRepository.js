/**
 * Created by ming on 2016/9/15.
 */

import {AsyncStorage} from 'react-native';

export const API_START = "http://news-at.zhihu.com/api/4/start-image/1080*1776";   // 启动图片
export const API_LATEST = 'http://news-at.zhihu.com/api/4/news/latest';            // 最新消息
export const API_HOME = 'http://news.at.zhihu.com/api/4/news/before/';             // 过往消息
export const API_THEME = 'http://news-at.zhihu.com/api/4/theme/';                  // 主题日报查看
export const API_THEMES = 'http://news-at.zhihu.com/api/4/themes';                 // 主题日报列表
export const API_STROY_EXTRA = 'http://news-at.zhihu.com/api/4/story-extra/';      // 文章详情


export function appStart(url) {
    new Promise((resolve, reject)=> {
        fetch(url)
            .then((res)=>res.json())
            .then((resData)=> {
                resolve(resData)
            })
            .catch((err)=> {
                "use strict";
                console.log(err);
                resolve(null);
            });
    });
}