import { mapActions } from 'vuex'

export const isCollapseMixin = {
  data() {
    return {
      isCollapse: false, // 是否折叠
    }
  },
  methods: {
    toggleCollapse() {
      this.$emit('toggleCollapse')
      // eslint-disable-next-line no-return-assign
      return this.isCollapse = !this.isCollapse
    }
  }
}

// 添加对话框用户状态
export const isAddUserDialog = {
  methods: {
    ...mapActions(['isShowAddUserDialog'])
  }
}

// 修改用户对话框状态
export const isEditUserDialog = {
  methods: {
    ...mapActions(['showEditDialog'])
  }
}

// 验证规则
export const validator = {
  data() {
    // 验证邮箱的规则
    const checkEmail = (rule, value, cb) => {
      // 验证邮箱的正则表达式
      let regEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
      if (regEmail.test(value)) {
        // 验证成功
        return cb()
      }
      cb(new Error('请输入合法的邮箱'))
    }
    // 验证手机号的规则
    // eslint-disable-next-line no-unused-vars
    const checkMobile = (rule, value, cb) => {
      // 验证手机号的正则表达式
      let regMobile = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
      if (regMobile.test(value)) {
        return cb()
      }
      cb(new Error('请输入合法的手机号'))
    }
    return {
      // 添加表单的验证规则对象
      formRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '用户名长度在 3 ~ 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '用户名长度在 6 ~ 15 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          // eslint-disable-next-line no-undef
          { validator: checkEmail, trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    /** 关闭对话框重置表单 */
    dialogClosed() {
      this.$refs.formRef.resetFields()
    }
  }
}
