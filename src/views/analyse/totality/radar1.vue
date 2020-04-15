<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>整体风险评估</span>
    </div>
    <div id="radar1" class="radar1"></div>
  </el-card>
</template>

<script>
import { computedRandomData } from '@/utils/public'
export default {
  computed: {},
  data() {
    return {
      option: {
        tooltip: {},
        radar: {
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { text: '思想', max: 100 },
            { text: '技术', max: 100 },
            { text: '身体', max: 100 }
          ]
        },
        series: [
          {
            name: '整体风险评估',
            type: 'radar',
            areaStyle: { normal: {} },
            data: [
              {
                value: [],
                name: '整体风险评估'
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    initChart() {
      const chart = this.$echarts.init(document.getElementById('radar1'))
      chart.setOption(this.option, true)
    },
    setRandomData() {
      this.option.series[0].data[0].value = computedRandomData(
        this.option.radar.indicator.length,
        100
      )
      this.initChart()
    }
  },
  mounted() {
    this.setRandomData()
    this.$bus.$on('changePerson', val => {
      this.setRandomData()
    })
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  height: 100%;
  .radar1 {
    height: calc(40vh - 30px);
  }
}
</style>
