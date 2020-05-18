import React, { PureComponent } from 'react';
import { Switch } from 'react-router-dom';
import Navbar from '~/components/website/navbar';
import WebsiteRoutes from '~/routes/website';
import RouteWithSubRoutes from '~/components/utils/routeWithSubRoutes';

class Main extends PureComponent {
  render() {
    return (
      <>
        <header id="main-header">
          <Navbar />
        </header>
        <Switch>
          {WebsiteRoutes.map((route, index) => (
            <RouteWithSubRoutes key={index.toString()} {...route} />
          ))}
        </Switch>
      </>
    );
  }
}

export default Main;
