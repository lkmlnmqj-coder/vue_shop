export default {
  /**
   * 获取折叠菜单状态
   * @param {*} state
   * @return boolean
   */
  getCollapse(state) {
    return state.isCollapse
  },
  /**
   * 获取高亮的菜单
   * @param {} state ,
   * @return 高亮的菜单
   */
  getMenuAction(state) {
    return state.menuActive
  },
  /** 获取添加用户对话框状态 */
  addDialogVisible(state) {
    return state.addDialogVisible
  },
  /** 获取修改用户对话框状态 */
  getEditDialog(state) {
    return state.isShowEditDialog
  },
}
