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
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['慢性疾病', '突发性疾病', '其他类别']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value'
        },
        xAxis: {
          type: 'category',
          data: []
        },
        series: [
          {
            name: '慢性疾病',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'inside'
            },
            data: []
          },
          {
            name: '突发性疾病',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'inside'
            },
            data: []
          },
          {
            name: '其他类别',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'inside'
            },
            data: []
          }
        ]
      }
    }
  },
  methods: {
    initData() {
      this.option.xAxis.data = this.classify[this.index]
      let len = this.option.xAxis.data.length
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
