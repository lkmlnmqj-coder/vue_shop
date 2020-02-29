import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  isCollapse: false, // 是否折叠
  menuActive: '', // 菜单点击高亮
  addDialogVisible: false, // 显示添加用户对话框
  isShowEditDialog: false, // 显示修改用户对话框
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
