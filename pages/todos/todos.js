// pages/todos/todos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //文本框的数据模型
    search: '',
    todos:[
      {
        name:"学习",
        completed:false
      },
      {
        name:"睡觉",
        completed:false
      },
      {
        name:"吃饭",
        completed:true
      },
    ],
    leftCount:2
  },
  inputChangeHandle:function(e){
    this.setData({search : e.detail.value})
    //console.log(e.detail.value)
  },
  addTodoHandle: function(){
    if(!this.data.search) return
    var todo=this.data.todos;
    //console.log(todo)
    todo.push({
      name:this.data.search,
      completed:false,
    })
    //必须显示的 通过setDate去改变数据，这样界面才会显示
    this.setData({todos: todo,search: '',leftCount: this.data.leftCount + 1})
  },
  completedChangeHandle:function(e){
    //console.log(e.currentTarget.dataset.index)
    var index=e.currentTarget.dataset.index
    var indexdata = this.data.todos[index]
    indexdata.completed = ! indexdata.completed
    var count = this.data.leftCount
    if(indexdata.completed){
      count--;
    }else{
      count++;
    }
    this.setData({todos: this.data.todos , leftCount: count})
    
  },
  delHandle: function(e){
    // console.log(e.currentTarget.dataset.index)
    if( !this.data.todos[e.currentTarget.dataset.index].completed) return
    var news=this.data.todos.filter((item,index)=>{
        return index != e.currentTarget.dataset.index
    })
    this.setData({todos: news })
  },
  checkAllHandle:function(){
    this.data.todos.forEach(element => {
       element.completed = true
    });
    this.setData({todos:this.data.todos,leftCount: 0})
  },
  delAllHandle:function(){
    var news=this.data.todos.filter(element => {
       return element.completed !== true
    });
    this.setData({todos:news})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})