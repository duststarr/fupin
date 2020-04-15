<template>
  <div class="dashboard-container">
    <el-row :gutter="20" class="rowwrap">
      <el-col :span="7">
        <!-- 个人基本信息 -->
        <div class="info">
          <info></info>
        </div>
        <!-- 整体风险分布情况-->
        <div class="radar1">
          <radar1></radar1>
        </div>
        <!-- 历史事件分布雷达图 -->
        <!-- <div class="radar2"></div> -->
      </el-col>
      <el-col :span="17">
        <!-- 信息列表 -->
        <div class="list">
          <el-card style="height: 100%;">
            <div slot="header" class="clearfix">
              <span>风险列表</span>
              <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-more">更多</el-button>
            </div>
            <list></list>
          </el-card>
        </div>
        <!-- 3个饼图 -->
        <div class="pies">
          <radar2 class="radar"></radar2>
          <pies class="pie"></pies>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import info from './info'
import radar1 from './radar1'
import radar2 from './radar2'
import pies from './pies'
import list from './list'
export default {
  components: {
    info,
    radar1,
    radar2,
    pies,
    list
  },
  computed: {},
  // data() {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  margin: 30px;
  .info {
    height: calc(60vh - 130px);
    // background-color: aqua;
    margin-bottom: 20px;
  }
  .radar1 {
    height: 40vh;
    // background-color: aqua;
    // margin-bottom: 20px;
  }
  .radar2 {
    height: 30vh;
    background-color: aqua;
  }
  .list {
    height: calc(60vh - 130px);

    margin-bottom: 20px;
  }
  .pies {
    height: 40vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .radar {
      width: 30%;
    }
    .pie {
      width: calc(70% - 20px);
    }
  }
}
</style>
