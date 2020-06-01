import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import RouteWithSubRoutes from '~/components/utils/RouteWithSubRoutes';
import Routes from '~/routes';

class App extends PureComponent {
  render() {
    return (
      <>
        <Router>
          <Switch>
            {Routes.map((route, i) => (
              <RouteWithSubRoutes key={i.toString()} {...route} />
            ))}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
