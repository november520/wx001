const util = require('../../../utils/util.js')
const app = getApp();
Page({
  data: {
    list:[
      {
        name: '汇鸿价值成长2号',
        company: '汇鸿资产',
        stragey: '股票多头'
      },
      {
        name: '汇鸿价值对冲1号',
        company: '汇鸿资产',
        stragey: '市场中性'
      },
      {
        name: '隆慧1号',
        company: '隆慧投资',
        stragey: '多策略'
      },
      {
        name: '汇鸿价值成长2号',
        company: '汇鸿资产',
        stragey: '股票多头'
      },
      {
        name: '汇鸿价值对冲1号',
        company: '汇鸿资产',
        stragey: '市场中性'
      },
      {
        name: '隆慧1号',
        company: '隆慧投资',
        stragey: '多策略'
      },
      {
        name: '汇鸿价值成长2号',
        company: '汇鸿资产',
        stragey: '股票多头'
      },
      {
        name: '汇鸿价值对冲1号',
        company: '汇鸿资产',
        stragey: '市场中性'
      },
      {
        name: '隆慧1号',
        company: '隆慧投资',
        stragey: '多策略'
      },
      {
        name: '汇鸿价值成长2号',
        company: '汇鸿资产',
        stragey: '股票多头'
      },
      {
        name: '汇鸿价值对冲1号',
        company: '汇鸿资产',
        stragey: '市场中性'
      },
      {
        name: '隆慧1号',
        company: '隆慧投资',
        stragey: '多策略'
      },
      {
        name: '汇鸿价值对冲1号',
        company: '汇鸿资产',
        stragey: '市场中性'
      },
      {
        name: '隆慧1号',
        company: '隆慧投资',
        stragey: '多策略'
      },
      {
        name: '汇鸿价值成长2号',
        company: '汇鸿资产',
        stragey: '股票多头'
      },
      {
        name: '汇鸿价值对冲1号',
        company: '汇鸿资产',
        stragey: '市场中性'
      },
      {
        name: '隆慧1号',
        company: '隆慧投资',
        stragey: '多策略'
      }
    ]
  },
  goToDetail: function (e) {
    console.log(app.globalData.userInfo)
    wx.navigateTo({
      url: './../page2/page1?dataset=' + JSON.stringify(e.currentTarget.dataset)
    })
  },
})