import React, { Component } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Home from './Containers/Home'
import SignIn from './Containers/SignIn';
import SignUp from './Containers/SignUp';


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/" exact component = {Home}/>
         <Route path="/signin" exact component = {SignIn}/>
         <Route path="/signup" exact component = {SignUp}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
