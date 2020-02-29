/* eslint-disable no-unused-vars */
<template>
  <el-dialog
  title="添加用户"
  :visible.sync="addDialogVisible"
  @close="dialogClosed"
  width="50%">
    <!-- 内容文体区域 -->
    <el-form :model="userForm" :rules="formRules" ref="formRef" label-width="70px">
     <el-form-item label="用户名" prop="username">
       <el-input v-model="userForm.username"></el-input>
     </el-form-item>
     <el-form-item label="密码" prop="password">
       <el-input type="password" v-model="userForm.password"></el-input>
     </el-form-item>
     <el-form-item label="邮箱" prop="email">
       <el-input v-model="userForm.email"></el-input>
     </el-form-item>
     <el-form-item label="手机" prop="mobile">
       <el-input v-model="userForm.mobile"></el-input>
     </el-form-item>
    </el-form>
    <!-- 底部区域 -->
    <span slot="footer" class="dialog-footer">
      <el-button @click="isShowAddUserDialog">取 消</el-button>
      <el-button type="primary" @click="userInfo">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { isAddUserDialog, validator } from 'common/mixin'

import { addUser } from 'network/users'

export default {
  name: 'AddUserDialog',
  components: {
  },
  mixins: [isAddUserDialog, validator],
  data() {
    // // 验证邮箱的规则
    // const checkEmail = (rule, value, cb) => {
    //   // 验证邮箱的正则表达式
    //   let regEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
    //   if (regEmail.test(value)) {
    //     // 验证成功
    //     return cb()
    //   }
    //   cb(new Error('请输入合法的邮箱'))
    // }
    // // 验证手机号的规则
    // // eslint-disable-next-line no-unused-vars
    // const checkMobile = (rule, value, cb) => {
    //   // 验证手机号的正则表达式
    //   let regMobile = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
    //   if (regMobile.test(value)) {
    //     return cb()
    //   }
    //   cb(new Error('请输入合法的手机号'))
    // }
    return {
      // 添加用户的表单数据
      userForm: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      // // 添加表单的验证规则对象
      // addFormRules: {
      //   username: [
      //     { required: true, message: '请输入用户名', trigger: 'blur' },
      //     { min: 3, max: 10, message: '用户名长度在 3 ~ 10 个字符', trigger: 'blur' }
      //   ],
      //   password: [
      //     { required: true, message: '请输入密码', trigger: 'blur' },
      //     { min: 6, max: 15, message: '用户名长度在 6 ~ 15 个字符', trigger: 'blur' }
      //   ],
      //   email: [
      //     { required: true, message: '请输入邮箱', trigger: 'blur' },
      //     // eslint-disable-next-line no-undef
      //     { validator: checkEmail, trigger: 'blur' }
      //   ],
      //   mobile: [
      //     { required: true, message: '请输入手机号', trigger: 'blur' },
      //     { validator: checkMobile, trigger: 'blur' }
      //   ]
      // }
    }
  },
  computed: {
    addDialogVisible: {
      get: function() {
        return this.$store.getters.addDialogVisible
      },
      set: function() {
        this.$store.dispatch('isShowAddUserDialog')
      }
    }
  },
  methods: {

    // 修改|添加用户信息
    userInfo() {
      this.$refs.formRef.validate(valid => {
        // eslint-disable-next-line no-useless-return
        if (!valid) {
          return
        }
        // 可以发起添加用户的网络请求
        addUser(this.userForm).then(res => {
          // console.log(res);
          if (res.meta.status !== 201) return this.$message.error('添加用户失败')
          this.$message.success('添加成功')
          this.$store.dispatch('isShowAddUserDialog')
          this.$emit('addUser')
        })
      })
    }
  }
}

</script>

<style lang='less' scoped>

</style>
