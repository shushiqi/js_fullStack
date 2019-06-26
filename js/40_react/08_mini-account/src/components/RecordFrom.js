import React, { Component } from 'react'

export default class RecordFrom extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <input type="text" className="form-controller"  placeholder="Date" name="date" />
        </div>
        <div className="form-group">
          <input type="text" className="form-controller" placeholder="Title" name="title" />
        </div>
        <div className="form-group">
          <input type="text" className="form-controller" placeholder="Amount" name="amount" />
        </div>
        <button className="btn btn-primary">Create Record</button>
      </form>
    )
  }
}
