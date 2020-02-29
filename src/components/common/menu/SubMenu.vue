<template>
  <div v-if="Object.keys(menuList).length !== 0">
    <toggle-button></toggle-button>
    <el-menu
    background-color="#313743"
    text-color="#fff"
    active-text-color="#4e9df9"
    unique-opened
    :collapse="getCollapse"
    :collapse-transition="false"
    router
    :default-active="actionPath">
    <!-- 一级菜单 -->
    <el-submenu :index="index(item.id)" v-for="item in menuList" :key="item.id">
      <!-- 一级菜单的模版区域 -->
      <template slot="title">
        <!-- 图标 -->
        <i :class="iconsObj[item.id]"></i>
        <!-- 文本 -->
        <span>{{item.authName}}</span>
      </template>
      <menu-item :childrenMenus="item.children"></menu-item>
    </el-submenu>
     </el-menu>
  </div>
</template>

<script>
import MenuItem from './MenuItem';

import ToggleButton from 'components/common/menu/ToggleButton';

import { mapGetters } from 'vuex';

export default {
  name: 'SubMenu',
  components: {
    MenuItem,
    ToggleButton
  },
  props: {
    menuList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      iconsObj: {
        125: 'iconfont icon-users',
        103: 'iconfont icon-tijikongjian',
        101: 'iconfont icon-shangpin',
        102: 'iconfont icon-danju',
        145: 'iconfont icon-baobiao'
      },
      // 被激活的链接地址
      actionPath: ''
    }
  },
  created() {
    this.actionPath = window.sessionStorage.getItem('actionPath')
  },
  computed: {
    ...mapGetters(['getCollapse']),
  },
  methods: {
    index(id) {
      return id + ''
    },
  }
}

</script>

<style lang='less' scoped>
.el-menu {
  border-right: none;
}

.iconfont{
  margin-right: 10px;
}
</style>
