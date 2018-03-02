const util = require('../../../utils/util.js')
//全局变量
var page=0;

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
    console.log(e.currentTarget.dataset)
    wx.navigateTo({
      url: './../page2/page1?dataset=' + JSON.stringify(e.currentTarget.dataset)
    })
  },
  // //下拉加载
  // onPullDownRefresh:function(){
  //   wx.showNavigationBarLoading();
  //   console.log("上啦加载")
  // },
  //上拉加载更多
  onReachBottom: function () {
    wx.showLoading({
      title: '正在加载中'
    });
    page +=1;
    // 从后台获取数据时使用
    // wx.request({
    //   url: 'http://xxx/?page='+page,
    //   method: "GET",
    //   header:{
    //     'content-type': 'application/text'
    //   },
    //   success: function(res){

    //   }
    // })
    console.log('加载更多',page)
    var that = this;
    setTimeout(() => {
      this.setData({
        // isHideLoadMore: true,
        list: that.data.list.concat([
          {
            name: '东方红1号',
            company: '上海东方证券资产管理公司',
            stragey: '股票多头'
          },
          {
            name: '东方红2号',
            company: '上海东方证券资产船里',
            stragey: '股票多头'
          },
          {
            name: '东方红3号',
            company: '上海东方证券资产船里',
            stragey: '股票多头'
          },
        ]),
      });
      wx.hideLoading()
    }, 2000)
  }, 
  
  //加载更多
  // loadMore: function(e){

  //   console.log("---")
  //     wx.showLoading({
  //     title: '正在加载中'
  //   });
  //   page +=1;
  //   // 从后台获取数据时使用
  //   // wx.request({
  //   //   url: 'http://xxx/?page='+page,
  //   //   method: "GET",
  //   //   header:{
  //   //     'content-type': 'application/text'
  //   //   },
  //   //   success: function(res){

  //   //   }
  //   // })
  //   var that = this;
  //   console.log('加载更多', page, that.data.list)
    
  //   setTimeout(() => {
  //     this.setData({
  //       // isHideLoadMore: true,
  //       list: that.data.list.concat([
  //         {
  //           name: '东方红1号',
  //           company: '上海东方证券资产管理公司',
  //           stragey: '股票多头'
  //         },
  //         {
  //           name: '东方红2号',
  //           company: '上海东方证券资产船里',
  //           stragey: '股票多头'
  //         },
  //         {
  //           name: '东方红3号',
  //           company: '上海东方证券资产船里',
  //           stragey: '股票多头'
  //         },
  //       ]),
  //     });
  //     wx.hideLoading()
  //   }, 2000)
  //   console.log(that.data.list)
  // }
})