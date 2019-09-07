import React, { Component } from 'react'
import { Button } from 'antd';
import { observer } from 'mobx-react'

@observer
class Count extends Component {
  
  handleTodo() {
    console.log('---------')
    console.log(this.props)
  }
  
  handleAdd() {
    this.props.countNum.add()
    console.log('add complete' + this.props.countNum.count)
  }

  render() {
    const {count} = this.props.countNum
    return (
      <div>
        <h2>This is home page！</h2>
        <div className="App">
          <div>Count {count}</div>
          <br />
          <div>{this.props.countNum.getCount}</div>
          <Button type="primary" onClick={this.handleTodo.bind(this)}>console</Button>
          <br />
          <br />
          <Button type="primary" onClick={this.handleAdd.bind(this)}>Add</Button>

        </div>
      </div>
    )
  }
}

export default Count