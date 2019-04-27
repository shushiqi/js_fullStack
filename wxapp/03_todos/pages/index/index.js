Page({
  data:{
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    addShow: false,
    addText: '',
    todos:[]
  },
  getUserInfo: function(e){
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      // MVVM编程】、响应式
      hasUserInfo: true
    })
  },
  addTodoShow: function(e){
    console.log('---')
    this.setData({
      addShow: true
    })
  },
  addTodoHide: function(e){
    this.setData({
      addShow: false
    })
  },
  addInput: function(e){
    this.setData({
      addText: e.detail.value
    })
  },
  addTodo: function(e){
    // 检测输入框中是否有内容
    if(!this.data.addText.trim()){
      return;
    }
    let todos = this.data.todos;
    todos.push({
      id: new Date().getTime(),
      title: this.data.addText,
      status: '0'
    });
    this.setData({
      todos
    });
    this.addTodoHide();
  }
})