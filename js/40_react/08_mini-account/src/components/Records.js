import React, { Component } from 'react'
import Record from './Record'
import * as RecordsAPI from '../utils/RecordsAPI'
import RecordFrom from './RecordFrom'

class Records extends Component {
  constructor() {
    super()
    this.state = {
      error: null,
      isLoaded: false,
      records: []
    }
  }
  componentDidMount() {
    RecordsAPI.getAll().then(
      response => this.setState({
        records: response.data,
        isLoaded: true
      })
      // console.log(response.data,'----')
    ).catch(
      error => this.setState({
        error,
        isLoaded: true,
      })
    )
  }
  addRecord(record){
    this.setState({
      error: null,
      isLoaded: true,
      records:[
        ...this.state.records,
        record
      ]      
    })    
  }
  render() {
    const { error, isLoaded, records } = this.state
    let recordsComponent
    if (error) {
      recordsComponent = <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      recordsComponent = <div>Loading......</div>
    } else {
      recordsComponent = (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <td>Title</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => <Record key={record.id} {...record} />)}
          </tbody>
        </table>
      )
    }

    return (
      <div>
        <h2>Records</h2>
        <RecordFrom handleNewRecord={this.addRecord.bind(this)} />
        {recordsComponent}
      </div>
    )
  }
}
export default Records