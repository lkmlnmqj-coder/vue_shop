
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
