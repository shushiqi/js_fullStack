import { observable, action  } from "mobx";
class TodoList {
  // 利用
  @observable todos = [
    {
      id: 0,
      name: 'old task'
    }
  ]
  @action push() {
    let length = this.todos.length
    this.todos.push({
      id: ++length,
      name: 'new Task'
    })
  }

}

export default new TodoList()