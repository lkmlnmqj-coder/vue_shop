import {
  CHANGE_COLLAPSE,
  CHANGE_MENU_ACTIVE,
  ADD_DIALOG_VISIBLE,
  EDIT_DIALOG,
} from './mutation-types'

export default {
  /** 导航栏折叠 */
  changeCollapse({ state, commit }) {
    commit(CHANGE_COLLAPSE)
  },
  /** 导航菜单高亮 */
  changMenuActive({ state, commit }, payload) {
    // console.log(payload);
    commit(CHANGE_MENU_ACTIVE, payload)
  },
  /** 改变添加用户对话框显示 */
  isShowAddUserDialog({ state, commit }) {
    commit(ADD_DIALOG_VISIBLE)
  },
  /** 改变修改用户对话框显示 */
  showEditDialog({ state, commit }) {
    commit(EDIT_DIALOG)
  },
}
