import {dataList} from '../../mock/data.js';
Page({
  data: {
    dataList
  },
  // 监听下拉刷新事件
  onPullDownRefresh() {
    
    // wx.startPullDownRefresh()
    //   .then(res => {
    //     setTimeout(() => {
    //       wx.stopPullDownRefresh()
    //     }, 2000)
    //   })
  }
})