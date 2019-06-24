import React from 'react'
import { Button } from 'antd';

// 计数器
export default  class Counter extends React.Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div>
        {value}
        <div>
          <Button onClick={onIncrement}>+</Button>
        </div>
        <div>
          <Button onClick={onDecrement}>-</Button>
        </div>
      </div>
    )
  }
}

