import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import ROUTES from './constants/routes';
import Header from './header/Header';

function App() {
  return (
    <Router>
      <div className="site_container">
        <div className="container">
          <Header />
          <Switch>
            {
              ROUTES
                .map((value, index) =>
                  (
                    <Route exact
                      path={value.path}
                      key={index}>
                      {value.component()}
                    </Route>)
                )
            }

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
