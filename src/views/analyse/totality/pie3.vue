<template>
  <div id="pie3" class="pie3"></div>
</template>

<script>
import { computedRandomData } from '@/utils/public'
export default {
  computed: {},
  data() {
    return {
      option: {
        title: {
          text: '身体问题',
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
      const chart = this.$echarts.init(document.getElementById('pie3'))
      chart.setOption(this.option, true)
    },
    setRandomData() {
      var data = [
        { value: 0, name: '体能考核情况' },
        { value: 0, name: '伤病记录' },
        { value: 0, name: '近期训练载荷情况' },
        { value: 0, name: '体检情况' },
        { value: 0, name: '疗养休息情况' }
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
.pie3 {
  height: calc(40vh - 30px);
}
</style>
