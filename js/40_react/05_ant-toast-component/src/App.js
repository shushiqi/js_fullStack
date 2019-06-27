import React from 'react';
import './App.css';
import { Button, notification } from 'antd';
import ReactDOM from 'react-dom'
import toast from './toast/toast'

function App() {
  const openNotificationWithIcon = type => {
    toast[type]('这是提示的内容');
  };
  return (
    ReactDOM.render(
      <div>
        <button onClick={() => openNotificationWithIcon('success')}>Success</button>
        <button onClick={() => openNotificationWithIcon('info')}>Info</button>
        <button onClick={() => openNotificationWithIcon('warning')}>Warning</button>
        <button onClick={() => openNotificationWithIcon('error')}>Error</button>
      </div>
    )
  )
}

export default App;
