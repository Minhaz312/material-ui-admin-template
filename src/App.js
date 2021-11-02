import React from "react";
import Layout from "./components/common/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import TransactionHistory from "./pages/TransactionHistory";
import BuyCoin from "./pages/BuyCoin";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/transaction/history" component={TransactionHistory} />
      <Route exact path="/buy-coin" component={BuyCoin} />
    </Router>
  );
}

export default App;
