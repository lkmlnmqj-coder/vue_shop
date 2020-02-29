<template>
 <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="paging.pagenum"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="paging.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="paging.total">
    </el-pagination>
</template>

<script>

export default {
  name: 'DataPage',
  props: {
    paging: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    /** 监听pagesize改变的事件 */
    handleSizeChange(pagesize) {
      // console.log(newPage);
      this.$emit('handleSizeChange', pagesize)
    },

    /** 监听 页面码 改变的事件 */
    handleCurrentChange(currentPage) {
      // console.log(currentPage);
      this.$emit('handleCurrentChange', currentPage)
    }
  }
}

</script>

<style lang='less' scoped>
.el-pagination {
  margin-top: 15px;
}
</style>
