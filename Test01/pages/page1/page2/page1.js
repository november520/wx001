
const util = require('../../../utils/util.js')
const Charts = require('../../../utils/wxcharts.js')

Page({
  data: {
    page:"tab1",
    baseInfoNodes1: [{
      name: 'ul',
      attrs: {
        class: 'ul_no_list',
        style: 'list-style:none; '
      },
      children: [
        {
          name: 'li',
          attrs: {
            class:'li_sub_title',
          },
          children: [{
            type: 'text',
            text: '产品简称：'
          }],
        },{
          name: 'li',
          attrs: {
            class: 'li_sub_title',
          },
          children: [{
            type: 'text',
            text: '产品名称：'
          }]
          },{
            name: 'li',
            attrs: {
              class: 'li_sub_title',
            },
            children: [{
              type: 'text',
              text: '发行方式：'
            }]
            }, {
              name: 'li',
              attrs: {
                class: 'li_sub_title',
              },
              children: [{
                type: 'text',
                text: '产品名称：'
              }],
        },
      ]
    }],
    baseInfoNodes2: [{
      name: 'ul',
      attrs: {
        class: 'ul_no_list',
        style: 'list-style:none;padding-left:0; '
      },
      children: [
        {
          name: 'li',
          attrs: {
            class: 'li_sub_con',
          },
          children: [{
            type: 'text',
            text: '汇鸿价值成长2号'
          }],
        }, {
          name: 'li',
          attrs: {
            class: 'li_sub_con',
          },
          children: [{
            type: 'text',
            text: '汇鸿价值成长2号私募证券投资基金'
          }]
        }, {
          name: 'li',
          attrs: {
            class: 'li_sub_con',
          },
          children: [{
            type: 'text',
            text: '股自自主发行'
          }]
        }, {
          name: 'li',
          attrs: {
            class: 'li_sub_con',
          },
          children: [{
            type: 'text',
            text: '股票策略-股票多头'
          }],
        },
      ]
    }],
    navTitleNodes1: [{
      name: 'div',
      attrs: {
        class: 'divText'
      },
      children: [
        {
          name: 'div',
          attrs: {
            class: 'nav_top_div',
          },
          children: [
            {
              name: 'p',
              children: [
                {
                  type: 'text',
                  text: '单位净值'
                }
              ]
            }, {
              name: 'p',
              attrs: {
                class: 'red p_num'
              },
              children: [
                {
                  type: 'text',
                  text: '0.9876'
                }
              ]
            }
          ] 
        },
        {
          name: 'div',
          attrs: {
            class: 'nav_top_div',
          },
          children: [
            {
              name: 'p',
              children: [
                {
                  type: 'text',
                  text: '所属策略'
                }
              ]
            }, {
              name: 'p',
              attrs: {
                class: 'stra_p',
                style: 'margin-top:8px'
              },
              children: [
                {
                  type: 'text',
                  text: '股票策略'
                }
              ]
            }, {
              name: 'p',
              attrs: {
                class: 'stra_p'
              },
              children: [
                {
                  type: 'text',
                  text: '股票多头'
                }
              ]
            }
          ]
        },
        {
          name: 'div',
          attrs: {
            class: 'nav_top_div',
            style: 'border:none;'
          },
          children: [
            {
              name: 'p',
              children: [
                {
                  type: 'text',
                  text: '净值日期'
                }
              ]
            }, {
              name: 'p',
              attrs: {
                class: 'p_num'
              },
              children: [
                {
                  type: 'text',
                  text: '02/24'
                }
              ]
            }
          ]
        }
      ]
    }],
    navTitleNodes2: [{
      name: 'hr',
      attrs: {
        style: 'width:calc(100% - 2px);height:40px;background:#eee;border:1px solid #ddd;'
      }
    }]
  },
  goToDetail: function (event) { 
    this.setData({
      page: event.target.id
    })
    if (event.target.id=="tab3"){
      //饼图
      new Charts({
        animation: true,
        canvasId: 'ringCanvas',
        type: 'ring',
        extra: {
          ringWidth: 15,
          pie: {
            offsetAngle: -45
          }
        },
        title: {
          name: '70%',
          color: '#7cb5ec',
          fontSize: 25
        },
        subtitle: {
          name: '收益率',
          color: '#666666',
          fontSize: 15
        },
        series: [{
          name: '成交量1',
          data: 15,
          stroke: false
        }, {
          name: '成交量2',
          data: 35,
          stroke: false
        }, {
          name: '成交量3',
          data: 78,
          stroke: false
        }, {
          name: '成交量4',
          data: 63,
          stroke: false
        }],
        disablePieStroke: true,
        width: util.windowWidth - 100,
        height: 170,
        dataLabel: false,
        legend: false,
        padding: 0
      });
      //柱状图
      var chartData={
        main:{
          categories:[2013,2014,2015,2016],
          data:[15.334,20.345,50.222,37.443],
        }
      }
      new Charts({
        canvasId: 'columnCanvas',
        type: 'column',
        animation: true,
        categories: chartData.main.categories,
        series: [{
          name: '成交量',
          data: chartData.main.data,
          format: function (val, name) {
            return val.toFixed(2) + '万';
          }
        }],
        yAxis: {
          format: function (val) {
            return val + '万';
          },
          title: '收益',
          min: 0
        },
        xAxis: {
          disableGrid: false,
          type: 'calibration'
        },
        extra: {
          column: {
            width: 15
          }
        },
        width: util.windowWidth-60,
        height: 140,
      });
    }
  },
  onLoad: function (e) {
    //折线图
    new Charts({
      canvasId: 'myCanvas',
      type: 'line',
      categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
      series: [{
        name: '成交量1',
        data: [0.15, 0.2, 0.45, 0.37, 0.4, 0.8],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }, {
        name: '成交量2',
        data: [0.30, 0.37, 0.65, 0.78, 0.69, 0.94],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        title: '成交金额 (万元)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: wx.getSystemInfoSync().windowWidth-10,
      height: wx.getSystemInfoSync().windowHeight/2-50,
      dataLabel: true,
    });
    
  }
 
})