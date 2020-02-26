<template>
  <div class="bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>

export default {
  name: 'HeaderBar'
}

</script>

<style scoped>
.center {
  flex:1;
}
</style>
