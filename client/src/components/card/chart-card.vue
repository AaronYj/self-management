<template>
  <div class="chart-card">
    <div class="card-header"></div>
    <div id="card-body"></div>
  </div>
</template>

<script>
export default {
  name: 'chart-card',
  data () {
    return {

    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      //  整个视图都被渲染之后才运行
      var myChart = this.$echarts.init(document.getElementById('card-body'))
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '前端面试复习进度'
        },
        tooltip: {},
        legend: {
          data: ['已学习','未开始','总数']
        },
        color: ['#00b6cf', '#eee', '#c796fe'],
        xAxis: {
          type: 'category',
          data: [
            'JavaScript',
            'Css',
            'Html',
            '浏览器',
            '性能优化',
            '工程化',
            'React',
            'Redux',
            'Vue',
            '算法',
            '编程题',
            '操作系统',
            '网络',
            'Node',
            '设计架构'
          ],
          axisTick: {
            interval: 0,
            inside: true
          },
          axisLabel: {
            show: true,
            interval: 0
          }
        },
        yAxis: {},
        series: [
          {
            name: '已学习',
            type: 'bar',
            stack: "x",
            data: [13, 16, 17, 9, 1, 12, 17, 20, 19, 22, 30, 21, 12, 23, 17],
          },
          {
            name: '未开始',
            type: 'bar',
            stack: 'x',
            data: [5, 20, 36, 10, 10, 20, 12, 34, 7, 10, 19, 28, 11, 10, 12]
          },
          {
            name: '总数',
            type: 'line',
            data: [18, 36, 53, 19, 11, 32, 29, 54, 26, 32, 49, 49, 23, 33, 29],
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
}
</script>

<style lang="less" scoped>
.chart-card {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 2px 2px rgb(204 197 185 / 50%);
  background-color: #ffffff;
  color: #252422;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  border: none;
  .card-header {
    padding: 20px 20px 0;
    border-bottom: 0;
    background-color: #fff;
  }
  #card-body {
    width: 100%;
    height: 425px;
    padding: 15px 15px 10px 15px;
  }
}
</style>