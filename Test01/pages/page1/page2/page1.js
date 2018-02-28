
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
        style: 'width:100%;height:40px;background:#eee;border:1px solid #ddd;'
      }
    }]
  },
  goToDetail: function (event) { 
    this.setData({
      page: event.target.id
    })
  },
  onLoad: function (e) {
    //图表
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