import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Home';
import MainPage from './Todo/MainPage';
import LandingPage from './Facebook/LandingPage';
function App() {
  

  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <ul className="nav">
        
        <li className="nav-item">
          <Link className="nav-link" to ="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/todo">Todo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/facebook">Facebook</Link>
          </li>
    </ul>
    </nav>
  </div>
  <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={MainPage}/>
        <Route exact path="/facebook" component={LandingPage}/>
      </Switch>
      
    </Router>
  );
  
}








export default App;
