import React, { Component } from 'react'
import '../../App.css'
import Count from '../../components/Count'
import countNum from '../../store/CountNum'

class home extends Component {

  render() {
    return (
      <div>
        <Count countNum={countNum} />
      </div>
    )
  }
}
export default home