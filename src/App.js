import React from 'react';
import './App.css';
import Index from './components/Index';
import Create from './components/Create'
import Edit from './components/Edit'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      

     
      
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route exact path="/edit/:id" component={Edit}/>
          
        </Switch>
      
    
    </div>
    </Router>
  );
}

export default App;
