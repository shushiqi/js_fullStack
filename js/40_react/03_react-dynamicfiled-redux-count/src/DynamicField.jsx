import React from 'react'
import { Input, Button, Divider } from 'antd'

function Field(props) {
  const { value } = props
  return (
    <div>
      <div>
        姓名：<Input value={value.name} placeholder="姓名" onChange={(e) => {
          props.onChange(e.target.value, 'name', e.target.index)
        }} />
      </div>
      <div>
        地址：<Input value={value.address} placeholder="地址" onChange={(e) => {
          props.onChange(e.target.value, 'address', e.target.index)
         }} />
      </div>
      <Button type="primary" onClick={() => { props.onDelete() }}>删除</Button>
    </div>
  )
}
class DynamicField extends React.Component {
  state = {
    lists: [
      {
        name: '',
        address: ''
      }
    ]
  }
  handleChange = (value, key, i) => {
    let lists = this.state.lists.slice(0)
    const obj = lists[i]
    const newObj = {
      ...obj,
      [key]: value
    }
    lists[i] = newObj
    this.setState({
      lists
    })
  }
  handleDelete = (i) => {
    const lists = this.state.lists.slice(0)
    lists.splice(i, 1)
    this.setState({
      lists
    })
  }
  handleAddFiled = () => {
    let lists = this.state.lists.slice(0)
    lists.push({
      name: '',
      address: ''
    })
    this.setState({
      lists
    })
  }
  render() {
    const { lists } = this.state
    return (
      <div>
        {
          lists.map((list, i) => {
            return <Field key={i} value={list} onChange={this.handleChange} onDelete={this.handleDelete} index={i} />
          })
        }
        <Button type="primary" onClick={this.handleAddFiled}>增加</Button>
      </div>
    )
  }
}
export default DynamicField