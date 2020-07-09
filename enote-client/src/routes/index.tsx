import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import './index.scss';

const IndexRouter: React.SFC = (): JSX.Element => {
  return (
    <div className="main">
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default IndexRouter;
