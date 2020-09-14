Component({
  properties: {
    content: String,
    department: String,
    extra: String,
  },
  externalClasses: ['ext-class'], // 可以将 class 设为 externalClasses
  data() {
    return {}
  },
  
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
    },
    moved: function () { },
    detached: function () { },
  },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { },
    hide: function () { },
    resize: function () { },
  },

})