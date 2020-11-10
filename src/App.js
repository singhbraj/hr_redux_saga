import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// import NavBar from './components/Navbar'
import 'semantic-ui-css/semantic.min.css'
import {Provider} from 'react-redux';
import store from './store'
import View from './components/view';
import Insert from './components/insert';
import './App.css'
import Login from './components/login';
import Signup from './components/signup';
import Edit from './components/edit';

// import Login from './components/login';
// import Signup from './components/signup';

 class App extends Component{
  render() {
  return (
    <Provider store={store}>

<div style={{marginTop:20,marginLeft:8,marginRight:8}}>
<Router>
  <Switch>
  <Route exact path='/' component={Login} />
  <Route exact path='/signup' component ={Signup} />
  <Route exact path='/view' component ={View} />
  <Route exact path='/insert' component ={Insert} />
  <Route exact path='/edit/:id' component={Edit} />
  
</Switch>
  </Router>
  </div>
    </Provider>
   
  );
}
}

export default App;