<template>
  <header-bar class="header-bar">
    <div slot="left"><img src="~assets/img/heima.png" alt=""></div>
    <div slot="center"><span>电商后台管理系统</span></div>
    <div slot="right"><el-button type="info" @click="logout">退出</el-button></div>
  </header-bar>
</template>

<script>
import HeaderBar from 'components/common/headerBar/HeaderBar';

export default {
  name: 'Header',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HeaderBar
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push('/login');
    }
  }
}

</script>

<style lang='less' scoped>
.header-bar {
  // height: 60px;
  width: 100%;
  color: #fff;
  font-size: 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 15px;
  }
}

</style>
