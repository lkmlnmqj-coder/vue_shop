<template>
  <el-table :data="userList" border stripe>
    <el-table-column type="index" label="#"/>
    <el-table-column prop="username" label="姓名"/>
    <el-table-column prop="email" label="邮箱"/>
    <el-table-column prop="mobile" label="电话"/>
    <el-table-column prop="role_name" label="角色"/>
    <el-table-column label="状态">
      <template v-slot="scope">
        <el-switch v-model="scope.row.mg_state" @change="userStateChanged(scope.row)"></el-switch>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="180px">
      <template v-slot="scope">
        <!-- 修改按钮 -->
        <el-button @click="editUser(scope.row.id)" type="primary" icon="el-icon-edit" size="mini"></el-button>
        <!-- 删除按钮 -->
        <el-button @click="removeUserById(scope.row.id)" type="danger" icon="el-icon-delete" size="mini"></el-button>
        <!-- 分配角色按钮 -->
        <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { isEditUserDialog } from 'common/mixin'

import {
  changeUserState,
  deleteUserById
} from 'network/users';

export default {
  name: 'UserTable',
  mixins: [isEditUserDialog],
  props: {
    userList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    /** 监听 switch 开关状态改变 */
    userStateChanged(userInfo) {
      changeUserState(userInfo).then(res => {
        if (res.meta.status !== 200) {
          userInfo.mg_state = !userInfo.mg_state
          return this.$message.error('更新用户状态失败')
        }
        this.$message.success(res.meta.msg)
      })
    },
    // 修改用户按钮事件
    editUser(id) {
      this.showEditDialog()
      this.$emit('editUser', id)
    },
    // 根据id删除用户按钮事件
    async removeUserById(id) {
      // 弹框询问用户是否删除
      const confirmResult = await this.$confirm(
        '此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(err => err)
      // 如果用户确认删除,则返回值为字符串 confirm,取消删除返回 cancel
      // console.log(res);
      if (confirmResult !== 'confirm') return this.$message.info('已取消删除')
      deleteUserById(id).then(res => {
        if (res.meta.status !== 200) return this.$message.error('删除失败')
        this.$message.success('删除成功')
        this.$emit('removeUser')
      })
    }
  }
}

</script>

<style lang='less' scoped>
.el-table {
  margin-top: 15px;
  font-size: 12px;
}
</style>
