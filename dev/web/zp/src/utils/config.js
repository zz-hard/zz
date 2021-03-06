﻿/*
 * @Author: liuyr 
 * 配置文件，项目中的通用方法和地址
 * @Date: 2019-12-22 19:09:29 
 * @Last Modified by: liuyr
 * @Last Modified time: 2019-12-22 19:13:24
 */
import Highcharts from 'highcharts';
/* 设置后台接口基础路径 */
let bp = "http://127.0.0.1:8899";
Highcharts.setOptions({
  // 设置Highcharts中的时间少8小时
  global: { useUTC: false },
  lang: {
    resetZoom: '重置比例',
    // highcharts中的暂无数据的显示
    noData: '暂无数据'
  }
})
export default {
  bp,
};