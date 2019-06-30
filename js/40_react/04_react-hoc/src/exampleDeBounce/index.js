import React, { Component } from 'react';
import { debounce, decDebounce, decArrowDebounce, decDisplayName } from './util';
// 防抖
@decDisplayName('CustomExampleDebounce')
class ExampleDebounce extends Component {
  state = {  }
  @decDebounce(1000)
  handleSubmit() {
    console.log('submit request');
  }
  @decArrowDebounce(1000)
  handleBuy = () => {
    console.log('buy now');
  }
  // handleSubmit = debounce(function() {
  //   console.log('request submit');
  // }, 1000);
  render() {
    return (
      <div>
        <button
        onClick={this.handleSubmit}
        >提交订单</button>
        <button
          onClick={this.handleBuy}
        >
          立即购买
        </button>
      </div>
    );
  }
}
 
export default ExampleDebounce;
