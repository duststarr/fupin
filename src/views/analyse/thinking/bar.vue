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
          data: ['家庭情况', '外界影响因素', '现实表现', '心理反映']
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
            name: '家庭情况',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'inside'
            },
            data: []
          },
          {
            name: '外界影响因素',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'inside'
            },
            data: []
          },
          {
            name: '现实表现',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'inside'
            },
            data: []
          },
          {
            name: '心理反映',
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
