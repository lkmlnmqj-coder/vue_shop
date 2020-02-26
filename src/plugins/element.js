import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  RadioGroup,
  RadioButton,
} from 'element-ui'

Vue.use(Button) // 按钮
Vue.use(Form) // 表单
Vue.use(FormItem) // 表单项
Vue.use(Input) // 输入框
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(RadioGroup);
Vue.use(RadioButton);

Vue.prototype.$message = Message // 弹框提示
