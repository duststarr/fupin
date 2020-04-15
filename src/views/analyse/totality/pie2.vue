<template>
  <div id="pie2" class="pie2"></div>
</template>

<script>
import { computedRandomData } from '@/utils/public'
export default {
  computed: {},
  data() {
    return {
      option: {
        title: {
          text: '技术问题',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // legend: {
        //   orient: 'horizontal',
        //   left: 'left',
        //   data: [
        //     '间断情况',
        //     '准备质量',
        //     '飞行实施情况',
        //     '任务完成和飞行后讲评情况',
        //     '课目转换情况'
        //   ]
        // },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            center: ['50%', '40%'],
            data: [],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    initChart() {
      const chart = this.$echarts.init(document.getElementById('pie2'))
      chart.setOption(this.option, true)
    },
    setRandomData() {
      var data = [
        { value: 0, name: '间断情况' },
        { value: 0, name: '准备质量' },
        { value: 0, name: 'XX实施情况' },
        { value: 0, name: '讲评情况' },
        { value: 0, name: '转换情况' }
      ]
      data.forEach(ele => {
        ele.value = Math.floor(Math.random() * 100)
      })
      this.option.series[0].data = data
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
.pie2 {
  height: calc(40vh - 30px);
}
</style>
