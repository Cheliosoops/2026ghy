//河口溶解氧预测
var myChart = echarts.init(document.getElementById('echartsrcxj'), 'walden')

const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: 'rgba(62, 99, 151, 1)'
      }
    }
  },
  legend: {
    data: ['上周实测', '预测'],
    top: '3%',
    left: 'center',
    textStyle: {
      fontSize: 10
    },
    itemWidth: 10,
    itemHeight: 10
  },
  grid: {
    top: '20%',
    bottom: '5%',
    left: '5%',
    right: '5%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    data: (function () {
      const dates = [];
      const now = new Date();
      // 生成未来8天日期 (MM/DD格式)
      for (let i = 0; i < 8; i++) {
        const d = new Date(now);
        d.setDate(d.getDate() + i);
        dates.push(`${d.getMonth() + 1}/${d.getDate()}`);
      }
      return dates;
    })()
  },
  yAxis: {
    type: 'value',
    name: 'mg/L', // 明确单位
    min: 4,
    max: 8,
    interval: 0.5
  },
  series: [
    {
      name: '上周实测',
      type: 'bar',
      barWidth: '30%', // 调整柱宽
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 1, color: '#188df0' }
        ])
      },
      data: [5.8, 5.8, 5.5, 5, 4.9, 5.5, 6.3, 6.5] // 更新为巡查数据
    },
    {
      name: '预测',
      type: 'line',
      smooth: true, // 添加平滑曲线
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: {
        width: 3,
        color: '#f58c2f'
      },
      data: [7, 6.9, 6.6, 7.4, 7, 6.2, 5.9, 5.8] // 更新为百分比数据
    }
  ]
};

myChart.setOption(option)
// 河口溶解氧监测
const myChart1 = echarts.init(document.getElementById('echartsldbj'), 'walden');

// 建议使用const避免变量污染
const option1 = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    // 优化日期生成逻辑（显示MM/DD格式）
    data: (() => {
      const now = new Date();
      return Array.from({ length: 8 }, (_, i) => {
        const d = new Date(now - (7 - i) * 86400000);
        return `${d.getMonth() + 1}/${d.getDate()}`; // 格式化为月/日
      });
    })()
  },
  yAxis: {
    type: 'value',
    name: 'mg/L',
    min: 4.5,  // 根据新数据范围设置最小值
    max: 7.0,  // 根据新数据最大值设置上限
    interval: 0.5, // 设置刻度间隔
    // axisLabel: {
    //   formatter: '{value} mg/L' // 添加单位标识
    // }
  },
  series: [{
    data: [6.2, 5.8, 5.8, 5.5, 5, 4.9, 5.5, 6.3], // 更新数据
    type: 'line',
    smooth: true,  // 添加平滑曲线
    symbol: 'circle', // 显示数据点
    symbolSize: 8,
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(58,77,233,0.8)' },
        { offset: 1, color: 'rgba(58,77,233,0.1)' }
      ])
    },
    lineStyle: {
      width: 3,
      color: '#3a4de9'
    },
    // 添加数据标签
    label: {
      show: true,
      position: 'top',
      formatter: '{c}',
      color: '#666',
      fontSize: 11
    }
  }],
  // 添加提示框格式化
  tooltip: {
    trigger: 'axis',
    valueFormatter: (value) => value + ' mg/L'
  },
  // 优化视觉样式
  grid: {
    top: '20%',
    left: '10%',
    right: '10%',
    bottom: '15%'
  }
};

myChart1.setOption(option1)

var myChart2 = echarts.init(document.getElementById('echartsjgbj'), 'walden');

const option2 = {
  tooltip: {
    trigger: 'axis',
    valueFormatter: (value) => value.toFixed(3) + ' mg/L' // 统一单位显示
  },
  legend: {
    data: ['NH3-N', 'TP', 'TN'],
    top: '3%',
    textStyle: {
      fontSize: 10
    },
    itemWidth: 10,
    itemHeight: 10
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: (function () {
      const now = new Date();
      return Array.from({ length: 8 }, (_, i) => {
        const d = new Date(now - (7 - i) * 86400000);
        return `${d.getMonth() + 1}/${d.getDate()}`; // 显示月/日格式
      });
    })()
  },
  yAxis: [{
    type: 'value',
    name: 'NH3-N/TP',
    min: 0.1,
    max: 0.7,
    interval: 0.1,
    axisLabel: {
      formatter: (value) => value.toFixed(1)
    }
  }, {
    type: 'value',
    name: 'TN',
    min: 3.5,
    max: 4.6,
    interval: 0.2,
    splitLine: { show: false },
    axisLabel: {
      formatter: (value) => value.toFixed(1)
    }
  }],
  series: [
    {
      name: 'NH3-N',
      type: 'line',
      data: [0.64, 0.65, 0.67, 0.58, 0.5, 0.6, 0.64, 0.5],
      smooth: true,
      symbol: 'circle',
      color: '#5470C6', // 蓝色系
      lineStyle: { width: 2.5 },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#5470C680' },
          { offset: 1, color: '#5470C610' }
        ])
      }
    },
    {
      name: 'TP',
      type: 'line',
      data: [0.143, 0.156, 0.15, 0.145, 0.153, 0.151, 0.139, 0.128],
      smooth: true,
      symbol: 'rect',
      color: '#91CC75', // 绿色系
      lineStyle: {
        width: 2.5,
        type: 'dashed' // 虚线区分
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#91CC7580' },
          { offset: 1, color: '#91CC7510' }
        ])
      }
    },
    {
      name: 'TN',
      type: 'line',
      yAxisIndex: 1, // 使用第二个y轴
      data: [4.5, 4.48, 4.36, 4.41, 4.38, 4.18, 3.87, 4.08],
      smooth: true,
      symbol: 'triangle',
      color: '#EE6666', // 红色系
      lineStyle: {
        width: 2.5,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowBlur: 6,
        shadowOffsetY: 3
      }
    }
  ],
  grid: {
    top: '25%',
    left: '12%',
    right: '12%',
    bottom: '15%'
  }
}

myChart2.setOption(option2)

//消防给水系统
var myChart3 = echarts.init(document.getElementById('echartsxfjs'), 'walden')

option3 = {
  xAxis: {
    type: 'category',
    data: ['压力异常', '未启泵', '水泵手动']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [20, 90, 60],
      type: 'bar'
    }
  ]
}

// 使用刚指定的配置项和数据显示图表。
myChart3.setOption(option3)

//故障统计

var myChart4 = echarts.init(document.getElementById('echartsgztj'), 'walden')

option4 = {
  // title: {
  //     text: '动态数据',
  // },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: 'rgba(62, 99, 151, 1)'
      }
    }
  },
  legend: {
    data: ['故障数量', '故障处理及时率']
  },

  xAxis: [
    {
      type: 'category',
      boundaryGap: true,
      data: (function () {
        var now = new Date()
        var res = []
        var len = 8
        while (len--) {
          res.unshift(now.getDate())
          now = new Date(now - 86400000)
        }
        return res
      })()
    },
    {
      type: 'category',
      boundaryGap: true,
      data: (function () {
        var res = []
        var len = 0
        while (len--) {
          res.push(8 - len - 1)
        }
        return res
      })()
    }
  ],
  yAxis: [
    {
      type: 'value',
      scale: true,
      name: '数量',
      max: 30,
      min: 0,
      boundaryGap: [0.2, 0.2]
    },
    {
      type: 'value',
      scale: true,
      name: '%',
      max: 100,
      min: 0,
      boundaryGap: [0.2, 0.2]
    }
  ],
  series: [
    {
      name: '故障数量',
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      data: (function () {
        var res = []
        var len = 8
        while (len--) {
          res.push(Math.round(Math.random() * 100))
        }
        return res
      })()
    },
    {
      name: '故障处理及时率',
      type: 'line',
      data: (function () {
        var res = []
        var len = 0
        while (len < 8) {
          res.push((Math.random() * 10 + 5).toFixed(1) - 0)
          len++
        }
        return res
      })()
    }
  ]
}

// 使用刚指定的配置项和数据显示图表。
myChart4.setOption(option4)

//火警统计

var myChart5 = echarts.init(document.getElementById('echartshjtj'), 'walden')
var colors = ['#5793f3', '#d14a61', '#675bba']

option5 = {
  color: colors,

  tooltip: {
    trigger: 'none',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: ['火警数量', '火警处理及时率']
  },
  grid: {
    top: 50,
    bottom: 50
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[1]
        }
      },
      axisPointer: {
        label: {
          formatter: function (params) {
            return (
              '火警数量  ' +
              params.value +
              (params.seriesData.length ? '：' + params.seriesData[0].data : '')
            )
          }
        }
      },
      data: (function () {
        var now = new Date()
        var res = []
        var len = 8
        while (len--) {
          res.unshift(now.getDate())
          now = new Date(now - 86400000)
        }
        return res
      })()
    },
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },

      axisPointer: {
        label: {
          formatter: function (params) {
            return (
              '火警处理及时率  ' +
              params.value +
              (params.seriesData.length ? '：' + params.seriesData[0].data : '')
            )
          }
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      max: 90,
      min: 0
    }
  ],
  series: [
    {
      name: '火警数量',
      type: 'line',
      xAxisIndex: 1,
      smooth: true,
      data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 9.6, 52.2, 48.7, 18.8, 6.0, 2.3]
    },
    {
      name: '火警处理及时率',
      type: 'line',
      smooth: true,
      data: [
        3.9,
        5.9,
        11.1,
        18.7,
        48.3,
        69.2,
        31.6,
        46.6,
        55.4,
        18.4,
        10.3,
        0.7
      ]
    }
  ]
}

myChart5.setOption(option5)

//执法结果统计
var myChart6 = echarts.init(document.getElementById('echartszfjgtj'), 'roma')

option6 = {
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
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
      data: ['责令立即', '责令整改', '受案登记', '行政处罚', '临时查封'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      type: 'bar',
      barWidth: '60%',
      data: [10, 41, 30, 48, 20]
    }
  ]
};


// 使用刚指定的配置项和数据显示图表。
myChart6.setOption(option6)

//安全评分
var myChart7 = echarts.init(document.getElementById('echartAqpf'))

option7 = {
  title: {
    text: '95',
    x: 'center',
    y: 'center',
    textStyle: {
      fontWeight: 'normal',
      color: '#ffffff',
      fontSize: '30'
    }
  },
  color: ['rgba(176, 212, 251, 1)'],


  series: [{
    name: 'Line 1',
    type: 'pie',
    clockWise: true,
    radius: ['100%', '85%'],
    itemStyle: {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        }
      }
    },
    hoverAnimation: false,
    data: [{
      value: 90,
      name: '01',
      itemStyle: {
        normal: {
          color: { // 完成的圆环的颜色
            colorStops: [{
              offset: 0,
              color: '#00cefc' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#367bec' // 100% 处的颜色
            }]
          },
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      }
    }, {
      name: '02',
      value: 10
    }]
  }]
}


// 使用刚指定的配置项和数据显示图表。
myChart7.setOption(option7)

//维保统计
var myChart8 = echarts.init(document.getElementById('echartWbtj'))

option8 = {
  title: {
    text: '8%',
    x: 'center',
    y: 'center',
    textStyle: {
      fontWeight: 'normal',
      color: '#FFFFFF',
      fontSize: '30'
    }
  },
  color: ['rgba(176, 212, 251, 0.5)'],


  series: [{
    name: 'Line 1',
    type: 'pie',
    clockWise: true,
    radius: ['90%', '75%'],
    itemStyle: {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        }
      }
    },
    hoverAnimation: false,
    data: [{
      value: 8,
      name: '01',
      itemStyle: {
        normal: {
          color: { // 完成的圆环的颜色
            colorStops: [{
              offset: 0,
              color: '#00cefc' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#367bec' // 100% 处的颜色
            }]
          },
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      }
    }, {
      name: '02',
      value: 92
    }]
  }]
}


// 使用刚指定的配置项和数据显示图表。
myChart8.setOption(option8)