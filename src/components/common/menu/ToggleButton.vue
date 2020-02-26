<template>
  <div class="toggle-button" @click="toggleCollapse">|||</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ToggleButton',
  methods: {
    ...mapActions(['changeCollapse']),
    // eslint-disable-next-line vue/return-in-computed-property
    toggleCollapse() {
      // eslint-disable-next-line no-unused-expressions
      this.changeCollapse()
    }
  }
}
</script>

<style lang='less' scoped>
.toggle-button {
  flex: 1;
  background-color: #485163;
  font-size: 10px;
  line-height: 24px;
  width: 100%;
  color: #fff;
  text-align: center;
  letter-spacing: .3em;
  cursor: pointer;
}
</style>
