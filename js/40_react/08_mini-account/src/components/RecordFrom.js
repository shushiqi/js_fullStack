import React, { Component } from 'react'
import * as RecordsAPI from '../utils/RecordsAPI'
export default class RecordFrom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: "",
      title: "",
      amount: ""
    }
  }

  handleChange(event) {
    let name, obj
    name = event.target.name
    this.setState((
      obj = {},
      obj["" + name] = event.target.value,
      obj
    ))
  }

  handleSubmit(event) {
    event.preventDefault();
    RecordsAPI.create(this.state).then(
      response => {
        this.props.handleNewRecord(response.data)
        this.setState({
          date: "",
          title: "",
          amount: ""
        })
      }
    ).catch(
      error => console.log(error.message)
    )
  }

  valid() {
    return this.state.date && this.state.title && this.state.amount
  }


  render() {
    return (
      <form className="form-inline mb-3" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group mr-1">
          <input type="text" className="form-controller" onChange={this.handleChange.bind(this)} placeholder="Date" name="date" value={this.state.name} />
        </div>
        <div className="form-group mr-1">
          <input type="text" className="form-controller" onChange={this.handleChange.bind(this)} placeholder="Title" name="title" value={this.state.title} />
        </div>
        <div className="form-group mr-1">
          <input type="text" className="form-controller" onChange={this.handleChange.bind(this)} placeholder="Amount" name="amount" value={this.state.amount} />
        </div>
        <button className="btn btn-primary" disabled={!this.valid()} >Create Record</button>
      </form>
    )
  }
}
