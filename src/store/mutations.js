import {
  CHANGE_COLLAPSE,
  CHANGE_MENU_ACTIVE,
  ADD_DIALOG_VISIBLE,
  EDIT_DIALOG,
} from './mutation-types'

export default {
  /**
  * mutations 唯一的目的就是修改state中的状态
  * mutations 中的第个方法尽可能完成的事件比较单一一点
  */
  // 菜单高亮状态修改
  [CHANGE_COLLAPSE](state) {
    state.isCollapse = !state.isCollapse
  },
  // 菜单折叠状态修改
  [CHANGE_MENU_ACTIVE](state, payload) {
    // console.log(payload);
    state.menuActive = payload
  },
  // 添加用户对话框状态修改
  [ADD_DIALOG_VISIBLE](state) {
    state.addDialogVisible = !state.addDialogVisible
  },
  // 修改用户对话框修改
  [EDIT_DIALOG](state) {
    state.isShowEditDialog = !state.isShowEditDialog
  }
}
