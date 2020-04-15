<template>
  <div class="wrap" ref="wrap">
    <!-- <searchForm></searchForm> -->
    <el-table :data="tableData" stripe style="width: 100%" :height="tableHeight - 80">
      <el-table-column prop="date" label="日期" width="120"></el-table-column>
      <el-table-column prop="name" label="姓名" width="80"></el-table-column>
      <el-table-column prop="name" label="课目" width="80"></el-table-column>
      <el-table-column prop="name" label="飞行阶段" width="80"></el-table-column>
      <el-table-column prop="name" label="类别" width="80"></el-table-column>
      <el-table-column prop="name" label="天气" width="80"></el-table-column>
      <el-table-column prop="address" label="填报人"></el-table-column>
    </el-table>
    <el-pagination style="margin-top:15px" layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
import searchForm from './searchForm'
export default {
  components: {
    searchForm
  },
  data() {
    return {
      tableHeight: '',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  computed: {},
  mounted() {
    this.tableHeight = this.$refs.wrap.offsetHeight
    // console.log(this.$refs.wrap.offsetHeight)
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  height: 37vh;
  overflow-y: auto;
}
</style>
