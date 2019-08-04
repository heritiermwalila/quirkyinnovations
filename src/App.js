import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

class App extends Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/contact-us" component={Contact}/>
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}
 


export default App;
