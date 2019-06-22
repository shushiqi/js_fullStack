import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
function Index() {
  return (
    <div>HOme</div>
  )
}
function About() {
  return (
    <div>About</div>
  )
}
function User() {
  return (
    <div>User</div>
  )
}

function Protect() {
  return (
    <div>protect</div>
  )
}

function Login(){
  return(
    <div>login</div>
  )
}

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/protect">protect</Link>
        </li>
      </ul>
      {
        true ? <Route path="/" component={Index}></Route> : <div>no</div>
      }
      <Route path="/about" component={About}></Route>
      <Route path="/user" component={User}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/protect" render={() => {
        true ? <Protect /> : <Redirect to={{
          pathname: '/login',
          state: { from: '/protect' }
        }} />
      }}></Route>
    </Router>
  );
}

export default App;
