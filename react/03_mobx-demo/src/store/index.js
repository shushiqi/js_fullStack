class Store {
  @observable count = 10;

  @action addCount() {
      this.count++
  }

  // @action isShow(index) {
  //     this.todos[index].done = false
  // }

  @computed get countNum() {
      return this.count
  }
}

export default new Store()