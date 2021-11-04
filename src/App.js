import React from 'react'
import Layout from './components/common/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import TransactionHistory from './pages/TransactionHistory'
import BuyCoin from './pages/BuyCoin'
import Messenger from './pages/Messenger'
import Profile from './pages/Profile'
import Login from './pages/Login'
function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/transaction/history" component={TransactionHistory} />
      <Route exact path="/buy-coin" component={BuyCoin} />
      <Route exact path="/messenger" component={Messenger} />
      <Route exact path="/profile" component={Profile} />
    </Router>
  )
}

export default App
