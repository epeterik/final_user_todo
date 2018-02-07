import React, { Component } from 'react';

//custom css imports
import './ui-toolkit/css/nm-cx/main.css';
import './custom.css';

//package imports
import { 
  BrowserRouter,
  Route,
  } from 'react-router-dom';

//App imports
import { NavigationBar } from './components/navBar';
import { AppHeader } from './components/header';
import { Home } from './components/home';
import Users from './containers/users';
import Todo from './containers/todo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="bg-off-white padding-medium">
          <AppHeader />
          <NavigationBar />
          <div className="card padding-none">
            <div className="row padding-horiz-medium">
              <Route exact path='/' component={Home} />
              <Route path='/Users' component={Users} />
              <Route path='/Todos' component={Todo} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
