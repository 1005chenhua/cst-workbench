/* eslint-disable react/react-in-jsx-scope */
// import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
export function getBarChart() {
  const option = {
    title: {
      text: '单位：辆/人',
      top: '15%',
      left: '10%',
      textStyle: {
        color: '#fff',
        fontSize: '14px',
      }
    },
    grid: {
      left: '10.5%',
      right: '6%',
      top: '25%',
      bottom: '15%'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
      right: '5%',
      top: '15%',
      itemWidth: 5,
      itemHeight: 5,
      itemGap: 30,
      icon: 'rectangle',
      textStyle: {
        color: '#fff'
      },
      data: ['外来人员','外来车辆'],
    },
    xAxis: {
      type: 'category',
      data: ['1','2','3','4','5','6','7','8'],
      axisLabel: {
        color: '#FFFFFF',
        interval: 0,
        // rotate: 40,
        textStyle: {
          fontSize: 12
        }
      },
      splitLine: {// 去除网格线
        show: true,
        lineStyle: {
          color: '#054792',
        }
      },
      axisLine: {
        lineStyle: {
          color: '#054792',
          width: 1 // 这里是为了突出显示加上的
        }
      },
      axisTick: {
        show: false
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}',
        color: '#FFFFFF',
        textStyle: {
          fontSize: 12
        }
      },
      splitLine: {// 去除网格线
        show: true,
        lineStyle: {
          color: '#054792',
        }
      },
      axisLine: {
        lineStyle: {
          color: '#054792',
          width: 1
        }
      },
      axisTick: {
        show: false
      },
    },
    series: [
      {
        name: '外来人员',
        type: 'bar',
        barWidth: '10',
        itemStyle: {
          normal: {
            // 颜色渐变
            color: new echarts.graphic.LinearGradient(0, 0, 0, 0.5, [
              {
                offset: 0,
                color: '#00FFED'

              },
              {
                offset: 1,
                color: '#0082EA'

              }
            ]),
            barBorderRadius: 5
          },
          emphasis: {
            barBorderRadius: 5
          }
        },
        data: [160,150,140,130,120,100,90,60]
      },
      {
        name: '外来车辆',
        type: 'bar',
        barWidth: '10',
        itemStyle: {
          normal: {
            // 颜色渐变
            color: new echarts.graphic.LinearGradient(0, 0, 0, 0.5, [
              {
                offset: 0,
                color: '#F4CB48'

              },
              {
                offset: 1,
                color: '#91C50F'

              }
            ]),
            barBorderRadius: 5
          },
          emphasis: {
            barBorderRadius: 5
          }
        },
        data: [100,120,130,140,150,160,210,25]
      }
    ]
  };
  return option;
}

export function getLineChart() {
  // option
  const option = {
    title: {
      text: '单位：人',
      top: '15%',
      left: '10%',
      textStyle: {
        color: '#fff',
        fontSize: '14px',
      }
    },
    grid: {
      left: '5%',
      right: '6%',
      bottom: '10%',
      top: '25%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'none' // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function(params) {
        let res = '';
        for (let i = 0; i < params.length; i++) {
          res += '<p style="margin:0;padding:5px 10px;">' + params[i].name + ' : ' + params[i].value + '人' +
                  '</p>';
        }
        return res;
      }
    },
    color: ['#00BBF4','#91C50F'],
    legend: {
      right: '5%',
      top: '15%',
      itemWidth: 5,
      itemHeight: 5,
      itemGap: 30,
      icon: 'rect',
      textStyle: {
        color: '#fff'
      },
      data: ['在监警力','警力配置'],
    },
    xAxis: {
      type: 'category',
      // data: ['一监区', '二监区', '三监区', '四监区', '五监区', '六监区','七监区', '八监区', '九监区', '十监区', '十一监区', '十二监区'],
      data: ['2','4','6','8','10','12','14','16','18','20','22','24'],
      boundaryGap: false,
      axisLabel: {
        show: true,
        interval: 0,
        // rotate: 40,
        textStyle: {
          color: '#fff',
          fontSize: 12
        },
      },
      axisLine: {
        lineStyle: {
          color: '#054792',
          width: 1
        }
      },
      splitLine: {// 去除网格线
        show: true,
        lineStyle: {
          color: '#054792',
        }
      },
      axisTick: {
        show: false
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: true,
        textStyle: {
          color: '#FFFFFF',
          fontSize: 12
        },
        formatter: '{value}'
      },
      axisLine: {
        lineStyle: {
          color: '#054792',
        }
      },
      splitLine: {// 去除网格线
        show: true,
        lineStyle: {
          color: '#054792',
        }
      },
      axisTick: {
        show: false
      },
    },
    series: [
      {
        name: '在监警力',
        data: [12,23,34,45,56,67,78,89,90,123,234,0],
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            borderColor: '#00FFFF',
            lineStyle: {
              width: 2,
              type: 'solid',
              color: '#00BBF4', // 线条渐变色
            },
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [{
                offset: 0,
                color: 'rgba(0,195,255,1)',
              },
              {
                offset: 1,
                color: 'rgba(0,195,255,0)'
              }]
            )
          }
        },
        symbol: 'none', // 取消折点圆圈
      },
      {
        name: '警力配置',
        data: [0,234,123,90,89,78,67,56,45,34,23,12],
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            borderColor: '#00FFFF',
            lineStyle: {
              width: 2,
              type: 'solid',
              color: '#91C50F', // 线条渐变色
            },
          },
        },
        symbol: 'none', // 取消折点圆圈
      }
    ]
  };
  return option;
}

export function getPieChart() {
  // option
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      x: 'center',
      y: 'bottom',
      icon: 'circle',
      orient: 'vertical',
      left: '60%',
      top: '20%',
      align: 'left',
      itemWidth: 7, // 设置宽度
      itemHeight: 7, // yuandian
      itemGap: 10, // 设置间距
      padding: [14, 14],
      textStyle: {
        color: '#06C5FD',
        fontSize: 12
      },
      data: ['在册人数','监内人数','释放人数','监外人数','死亡人数','销册人数','假释人数','调动人数']
    },
    color: [ '#FACD89','#F29B76','#AA89BD','#556FB5','#0068B7','#22AC38','#004986','#06EBFF'],
    calculable: true,
    series: [{
      name: '半径模式',
      type: 'pie',
      center: ['34%', '50%'],
      radius: ['20%','50%'],
      roseType: 'radius',
      label: {
        normal: {
          show: false
        },
      },
      lableLine: {
        normal: {
          show: false
        },
        emphasis: {
          show: true
        }
      },
      data:	[{
        value: 16,
        name: '在册人数'
      },{
        value: 18,
        name: '监内人数'
      },{
        value: 22,
        name: '释放人数'
      },{
        value: 16,
        name: '监外人数'
      },{
        value: 32,
        name: '死亡人数'
      },{
        value: 24,
        name: '销册人数'
      },{
        value: 24,
        name: '调动人数'
      },{
        value: 34,
        name: '假释人数'
      }
      ]
    }]
  };
  return option;
}

export function getSctChart() {
  // option
  const data = [
    [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
    [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]],
    [[456,81.8,68973,'Australia',2015],[294,81.7,9927,'Canada',2015],[334,76.9,10943,'China',2015],[291,78.5,11562,'Cuba',2015],[323,80.8,3457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,130527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,5830,'Turkey',2015],[38225,81.4,15810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
  ];
  const option = {
    title: {
      text: '单位：次',
      top: '15%',
      left: '10%',
      textStyle: {
        color: '#fff',
        fontSize: '14px',
      }
    },
    legend: {
      data: ['一级', '二级','三级'],
      right: '5%',
      top: '15%',
      itemWidth: 10, // 图例的宽度
      itemHeight: 10, // 图例的高度
      textStyle: { // 图例文字的样式
        color: '#ccc',
        fontSize: 12
      }
    },
    grid: {
      left: '5%',
      right: '6%',
      bottom: '10%',
      top: '25%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      name: '',
      axisLabel: {
        textStyle: {
          color: '#FFFFFF',
        },
      },
      axisLine: {
        lineStyle: {
          color: '#054792', // Y轴及其文字颜色
        }
      },
      splitLine: { // 分割线颜色修改
        lineStyle: {
          color: '#054792'
        }
      }
    },
    yAxis: {
      type: 'value',
      // name: '单位：次',
      axisLabel: {
        textStyle: {
          color: '#FFFFFF',
        },
      },
      axisLine: {
        lineStyle: {
          color: '#054792', // Y轴及其文字颜色
        }
      },
      splitLine: { // 分割线颜色修改
        lineStyle: {
          color: '#054792'
        }
      }
    },
    series: [{
      name: '一级',
      data: data[0],
      type: 'scatter',
      symbolSize: function(data) {
        return Math.sqrt(data[2]) / 5e2;
      },
      label: {
        emphasis: {
          show: true,
          formatter: function(param) {
            return '设备报警类别：\n'
            + param.data[3];
          },
          position: 'top'
        }
      },
      itemStyle: {
        normal: {
          shadowBlur: 10,
          shadowColor: 'rgba(120, 36, 50, 0.5)',
          shadowOffsetY: 5,
          color: '#F86AC8'
        }
      }
    }, {
      name: '二级',
      data: data[1],
      type: 'scatter',
      symbolSize: function(data) {
        return Math.sqrt(data[2]) / 5e2;
      },
      label: {
        emphasis: {
          show: true,
          formatter: function(param) {
            return '设备报警类别：\n'
            + param.data[3];
          },
          position: 'top'
        }
      },
      itemStyle: {
        normal: {
          shadowBlur: 10,
          shadowColor: 'rgba(25, 100, 150, 0.5)',
          shadowOffsetY: 5,
          color: '#F3BA0B'
        }
      }
    }, {
      name: '三级',
      data: data[2],
      type: 'scatter',
      symbolSize: function(data) {
        return Math.sqrt(data[2]) / 5e2;
      },
      label: {
        emphasis: {
          show: true,
          formatter: function(param) {
            return '设备报警类别：\n'
            + param.data[3];
          },
          position: 'top'
        }
      },
      itemStyle: {
        normal: {
          shadowBlur: 10,
          shadowColor: 'rgba(25, 100, 150, 0.5)',
          shadowOffsetY: 5,
          color: '#75D385'
        }
      }
    }]
  };
  return option;
}

export function getStaChart() { // 三类罪犯统计分析
  const option = {
  };
  return option;
}
