<template>
  <div id="bar" class="bar"></div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      classify: [
        [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
        ],
        ['一课目', '二课目', '三课目', '四课目', '五课目', '六课目'],
        ['一阶段', '二阶段', '三阶段', '四阶段', '五阶段', '六阶段']
      ],
      legendPart1: ['候鸟迁途', '恶劣天气'],
      legendPart2: [
        '间断情况',
        '准备质量',
        '实施情况',
        '讲评情况',
        '课目转换情况'
      ],
      seriesPart1: [
        {
          name: '候鸟迁途',
          type: 'bar',
          stack: '历史事件',
          data: []
        },
        {
          name: '恶劣天气',
          type: 'bar',
          stack: '历史事件',
          data: []
        }
      ],
      seriesPart2: [
        {
          name: '间断情况',
          type: 'bar',
          stack: '操作偏差',
          data: []
        },
        {
          name: '准备质量',
          type: 'bar',
          stack: '操作偏差',
          data: []
        },
        {
          name: '实施情况',
          type: 'bar',
          stack: '操作偏差',
          data: []
        },
        {
          name: '讲评情况',
          stack: '操作偏差',
          type: 'bar',
          data: []
        },
        {
          name: '课目转换情况',
          type: 'bar',

          stack: '操作偏差',
          data: []
        }
      ],

      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: []
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: []
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: []
      }
    }
  },
  methods: {
    initData() {
      if (this.index == 0) {
        this.option.legend.data = this.legendPart1.concat(this.legendPart2)
        this.option.series = this.seriesPart1.concat(this.seriesPart2)
      } else {
        this.option.legend.data = this.legendPart2
        this.option.series = this.seriesPart2
      }
      this.option.xAxis[0].data = this.classify[this.index]
      let len = this.option.xAxis[0].data.length
      this.option.series.forEach(ele => {
        ele.data = []
        for (var i = 0; i < len; i++) {
          ele.data.push(Math.floor(Math.random() * 100))
        }
      })
      this.initChart()
    },
    initChart() {
      const chart = this.$echarts.init(document.getElementById('bar'))
      chart.setOption(this.option, true)
    }
  },
  computed: {},
  mounted() {
    this.initData()
    this.$bus.$on('onsearch', val => {
      this.index = val.type
      this.initData()
      console.log(val)
    })
  }
}
</script>

<style lang="scss" scoped>
.bar {
  height: calc(50vh - 100px);
}
</style>
