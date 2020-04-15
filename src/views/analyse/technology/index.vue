<template>
  <div class="dashboard-container">
    <el-card class="box-card1">
      <div slot="header" class="clearfix">
        <span>技术状况分析</span>
      </div>
      <el-row>
        <el-col :span="6">
          <!-- <el-card style="height:calc(50vh - 110px); overflow-y: auto;">
            <searchForm action></searchForm>
          </el-card>-->
          <searchForm style="margin-top:30px"></searchForm>
        </el-col>
        <el-col :span="18">
          <bar />
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card2">
      <div slot="header" class="clearfix">
        <span>风险列表</span>
      </div>
      <list />
    </el-card>
  </div>
</template>

<script>
import bar from './bar'
import list from '../totality/list'
import searchForm from './searchForm'
export default {
  name: 'thinking',
  components: {
    bar,
    list,
    searchForm
  },
  computed: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  margin: 30px;
  .box-card1 {
    margin-bottom: 20px;
    height: 50vh;
  }
  .box-card2 {
    height: calc(50vh - 130px);
  }
}
</style>
