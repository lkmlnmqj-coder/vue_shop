<template>
  <sub-menu :menuList="menuList"></sub-menu>
</template>

<script>
import SubMenu from 'components/common/menu/SubMenu';

import { getMenuList } from 'network/home'

export default {
  name: 'LeftAside',
  components: {
    SubMenu
  },
  data() {
    return {
      menuList: [],
    }
  },
  created() {
    this.getMenuLists()
  },
  methods: {
    /** 获取所有的菜单 */
    getMenuLists() {
      getMenuList().then(res => {
        if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
        this.menuList = res.data
        // console.log(this.menuList);
      })
    }
  },
}

</script>

<style lang='less' scoped>

</style>
