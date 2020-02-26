import {
  CHANGE_COLLAPSE
} from './mutation-types'

export default {
  /**
  * mutations 唯一的目的就是修改state中的状态
  * mutations 中的第个方法尽可能完成的事件比较单一一点
  */
  [CHANGE_COLLAPSE](state) {
    state.isCollapse = !state.isCollapse
  }
}
