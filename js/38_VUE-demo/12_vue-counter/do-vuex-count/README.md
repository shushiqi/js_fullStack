## vuex
vue的大型项目开发 分成两种任务
- 组件开发工作 业务量开发
- vuex 数据设计
  store独立于组件之外 应用的数据管理中心
***
- state {count: 0} 共享的状态
- 修改: mutations => state 审核对状态的修改是否合法
  dispatch 派发 action('name', payload) -> action commit('mutation name') mutations => state 修改数据
- 组件
  表头|表头|表头
  ---|:--:|---:
  组件|读取数据|this.$store.state.count
  组件|写|actions(组件调用动作方法, )
***
- data是组件自有数据，没有多少  思考会不会被共享  
  应用层共享的，只要多于一个组件使用 且不是简单的兄弟关系 就使用vuex
- 共享的状态  
  vuex state 管理  
  mutations 修改数据  
  actions 被触发动作 提交到mutations   
  getters 对state的包装

mapActions mapGetters 引入组件