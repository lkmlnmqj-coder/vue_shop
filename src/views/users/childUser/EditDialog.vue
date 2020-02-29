<template>
  <el-dialog
  title="修改用户"
  :visible.sync="isEditDialogVisible"
  @close="dialogClosed"
  width="30%">
    <!-- 内容文体区域 -->
    <el-form :model="userForm" :rules="formRules" ref="formRef" label-width="70px">
      <el-form-item label="用户名">
        <el-input v-model="userForm.username" disabled></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="userForm.email"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="userForm.mobile"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="showEditDialog">取 消</el-button>
      <el-button type="primary" @click="userInfo">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { isEditUserDialog, validator } from 'common/mixin'

import { editUser } from 'network/users'

export default {
  name: 'EditDialog',
  props: {
    userForm: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mixins: [isEditUserDialog, validator],
  computed: {
    isEditDialogVisible: {
      get: function() {
        return this.$store.getters.getEditDialog
      },
      set: function() {
        this.$store.dispatch('showEditDialog')
      }
    }
  },
  methods: {
    // 修改|添加用户信息
    userInfo() {
      this.$refs.formRef.validate(valid => {
        // eslint-disable-next-line no-useless-return
        if (!valid) return
        // 可以发起添加用户的网络请求
        editUser(this.userForm).then(res => {
          console.log(res);
          if (res.meta.status !== 200) return this.$message.error('更新用户信息失败')
          this.$message.success('修改成功')
          // 关闭对话框
          this.$store.dispatch('showEditDialog')
          // 提交修改后重新获取用户列表信息事件
          this.$emit('editUser')
        })
      })
    }
  }
}

</script>

<style lang='less' scoped>

</style>
