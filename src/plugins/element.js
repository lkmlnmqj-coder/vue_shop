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
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination,
  Dialog,
  MessageBox,
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
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Card)
Vue.use(Row);
Vue.use(Col);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Switch);
Vue.use(Tooltip);
Vue.use(Pagination);
Vue.use(Dialog);

Vue.prototype.$message = Message // 弹框提示
Vue.prototype.$confirm = MessageBox.confirm // 消息提示对话框
