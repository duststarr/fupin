<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>思想、技术、身体风险分布图</span>
    </div>
    <div>
      <el-row>
        <el-col :span="8">
          <pie1></pie1>
        </el-col>
        <el-col :span="8">
          <pie2></pie2>
        </el-col>
        <el-col :span="8">
          <pie3></pie3>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import { computedRandomData } from '@/utils/public'
import pie1 from './pie1'
import pie2 from './pie2'
import pie3 from './pie3'
export default {
  components: {
    pie1,
    pie2,
    pie3
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.box-card {
  height: 100%;
  .radar2 {
    height: calc(40vh - 30px);
  }
}
</style>
