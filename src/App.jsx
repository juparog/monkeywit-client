import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from '~/routes';
import RouteWithSubRoutes from '~/components/utils/routeWithSubRoutes';

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
