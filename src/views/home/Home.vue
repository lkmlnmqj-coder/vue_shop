<template>
    <el-container class="home-container">
      <!-- 头部区域 -->
      <el-header>
        <header-bar/>
      </el-header>
      <!-- 页面主体区域 -->
      <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="isCollapse">
          <left-aside></left-aside>
        </el-aside>
        <!-- 右侧内容主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import HeaderBar from './childHome/Header';
import LeftAside from './childHome/LeftAside'

import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    HeaderBar,
    LeftAside,
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['getCollapse']),
    isCollapse() {
      return this.getCollapse ? '64px' : '200px'
    }
  }
}
</script>

<style lang="less" scope>
.home-container {
  height: 100%;
}

.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
}

.el-aside {
  background-color: #333744;
}

.el-main {
  background-color: #e9edf1;
}
</style>
