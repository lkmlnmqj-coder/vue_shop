<template>
  <div>
    <!-- 面包屑导航区域 -->
    <breadcrumb/>
    <!-- 卡片视图 -->
    <card/>
  </div>
</template>

<script>
import Breadcrumb from './childUser/Breadcrumb';
import Card from './childUser/Card';

export default {
  name: 'Users',
  components: {
    Breadcrumb,
    Card
  }
}

</script>

<style lang='less' scoped>

</style>
