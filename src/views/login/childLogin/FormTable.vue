/* eslint-disable no-useless-return */
<template>
    <el-form :model="loginForm" ref="loginFormRef" :rules="loginFormRules" label-width="0px" class="login_form">
      <!-- 用户名 -->
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="请选输入用户名" prefix-icon="iconfont icon-user"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="请选输入密码" prefix-icon="iconfont icon-3702mima"></el-input>
      </el-form-item>
      <!-- 按钮区域 -->
      <el-form-item class="btns">
        <el-button type="primary" @click="loginClick">登陆</el-button>
        <el-button type="info" @click="resetLoginForm">重置</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
import { login } from 'network/login'

export default {
  name: 'FormTable',
  data () {
    return {
      // 登陆表单数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 表单验证规则对象
      loginFormRules: {
        // 验证用户名
        username: [
          { required: true, message: '请输入登陆名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码
        password: [
          { required: true, message: '请输入登陆密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    /** 重置表单 */
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    /** 登陆 */
    loginClick() {
      this.$refs.loginFormRef.validate(valid => {
        let data = null;
        // eslint-disable-next-line no-useless-return
        if (!valid) return;
        login(this.loginForm.username, this.loginForm.password).then(res => {
          data = res.data;
          console.log(res);
          if (res.meta.status !== 200) return this.$message.error('登陆失败');
          // this.$message.success('登陆成功')
          // 1 将登陆成功之后的 token, 保存到客户端 sessionStorage 中
          // 1.1 项目中出了登录之外的其他API接口,必须在登陆之后才能访问
          // 1.2 token 只应在当前网站打开期间生效,所以将token 保存在sessionStorage中
          // console.log(data)
          window.sessionStorage.setItem('token', data.token);
          // 2 通过编程式导航跳转到后台主页,路由地址是 /home
          this.$router.push('/home');
        })
      })
    }
  }
}

</script>

<style lang='less' scoped>
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }
</style>
