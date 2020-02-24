import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message
} from 'element-ui'

Vue.use(Button) // 按钮
Vue.use(Form) // 表单
Vue.use(FormItem) // 表单项
Vue.use(Input) // 输入框

Vue.prototype.$message = Message // 弹框提示
