<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>历史事件雷达图</span>
    </div>
    <div id="radar2" class="radar2"></div>
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
        legend: {
          data: ['身体', '思想', '技术']
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              // color: '#fff',
              // backgroundColor: '#999',
              // borderRadius: 3,
              // padding: [3, 5]
            }
          },
          indicator: (function() {
            var res = []
            for (var i = 1; i <= 12; i++) {
              res.push({ text: i + '月', max: 100 })
            }
            return res
          })()
        },
        series: [
          {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            areaStyle: { normal: {} },
            data: [
              {
                name: '身体',
                value: [
                  2.6,
                  5.9,
                  9.0,
                  26.4,
                  28.7,
                  70.7,
                  75.6,
                  82.2,
                  48.7,
                  18.8,
                  6.0,
                  2.3
                ]
              },
              {
                name: '思想',
                value: [
                  2.0,
                  4.9,
                  7.0,
                  23.2,
                  25.6,
                  76.7,
                  35.6,
                  62.2,
                  32.6,
                  20.0,
                  6.4,
                  3.3
                ]
              },

              {
                name: '技术',
                value: [15, 23, 30, 32, 56, 67, 35.6, 62.2, 32.6, 20.0, 45, 55]
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    initChart() {
      const chart = this.$echarts.init(document.getElementById('radar2'))
      chart.setOption(this.option, true)
    },
    setRandomData() {
      this.option.series[0].data[0].value = computedRandomData(
        this.option.radar.indicator.length,
        100
      )
      this.option.series[0].data[1].value = computedRandomData(
        this.option.radar.indicator.length,
        100
      )
      this.option.series[0].data[2].value = computedRandomData(
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
  .radar2 {
    height: calc(40vh - 30px);
  }
}
</style>
