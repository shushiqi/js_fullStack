import { observable, action } from "mobx";

class countNum {
  @observable count = 10
  @action
  add() {
    this.count++
  }
  

}

export default new countNum() 