<template>
  <div v-if="Object.keys(childrenMenus).length !== 0">
    <!-- 二级菜单 -->
    <el-menu-item :index="item.id + ''" v-for="(item) in childrenMenus" :key="item.id">
      <template slot="title">
        <!-- 图标 -->
        <i class="el-icon-menu"></i>
        <!-- 文本 -->
        <span>{{item.authName}}</span>
      </template>
    </el-menu-item>
  </div>
</template>

<script>

export default {
  name: 'MenuItem',
  props: {
    childrenMenus: {
      type: Array,
      default() {
        return []
      }
    }
  }
}

</script>

<style lang='less' scoped>

</style>
