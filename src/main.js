/**
 * Created by tygm on 2017/3/23.
 *
 * 使用vue进行多页面开发，改动vue-cli脚手架实现
 *
 * @author: tygm
 * @Date: 2017/3/23 18:19
 * @Copyright(©) 2017 by tygm.
 *
 */

//导入样式

//导入Vue框架
import Vue from 'vue'
//导入element组件

import App from './App'

//import axios from "axios"

import router from './router'
new Vue({
  router,
  ...App
}).$mount('mainbody')
