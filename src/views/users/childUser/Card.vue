<template>
  <div>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="userList">
            <el-button @click="userList" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="isShowAddUserDialog">添加用户</el-button>
        </el-col>
      </el-row>
      <user-table @removeUser="removeUser" @editUser="editUser" :userList="usersList"></user-table>
      <data-page :paging="dataPaging" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange"></data-page>
    </el-card>
    <!-- 添加用户对话框 -->
    <add-user-dialog @addUser="getAddUserLise"></add-user-dialog>
    <edit-dialog :userForm="user" @editUser='getEditUserlist'></edit-dialog>
  </div>
</template>

<script>
import UserTable from './UserTable';
import DataPage from './DataPage';
import AddUserDialog from './AddUserDialog';
import EditDialog from './EditDialog';

import { isAddUserDialog } from 'common/mixin'

import {
  getUserList,
  DataPaging,
  queryUser,
} from 'network/users';

export default {
  name: 'Card',
  components: {
    UserTable,
    DataPage,
    AddUserDialog,
    EditDialog
  },
  mixins: [isAddUserDialog],
  data() {
    return {
      // 获取用户列表的参数对象
      queryInfo: {
        query: '',
        pagenum: 1, // 当前的页数
        pagesize: 5, // 当前每页显示多少条数据
      },
      dataPaging: {},
      usersList: [],
      total: 0,
      user: {}
    }
  },
  created() {
    this.userList()
  },
  methods: {
    userList() {
      getUserList(this.queryInfo).then(res => {
        // console.log(res);
        if (res.meta.status !== 200) return this.$message.error('获取用户列表失败')
        this.usersList = res.data.users
        this.dataPaging = new DataPaging(this.queryInfo, res.data.total)
      })
    },
    /** 监听pagesize改变的事件 */
    handleSizeChange(pagesize) {
      this.queryInfo.pagesize = pagesize
      this.userList()
    },
    /** 监听 页面码 改变的事件 */
    handleCurrentChange(currentPage) {
      this.queryInfo.pagenum = currentPage
      this.userList()
    },
    // 添加成功后,重新获取用户列表
    getAddUserLise() {
      this.userList()
    },
    // 获取修改用户的信息
    editUser(id) {
      queryUser(id).then(res => {
        // console.log(res);
        if (res.meta.status !== 200) return this.$message.error('没找到该用户');
        this.user = res.data
      })
    },
    // 修改后,重新获取用户列表
    getEditUserlist() {
      this.userList()
    },
    // 删除用户后,重新获取用户列表
    removeUser() {
      this.userList()
    }
  }
}

</script>

<style lang='less' scoped>

</style>
