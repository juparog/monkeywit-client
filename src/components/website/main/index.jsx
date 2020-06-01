import React, { PureComponent } from 'react';
import { Switch } from 'react-router-dom';

import RouteWithSubRoutes from '~/components/utils/routeWithSubRoutes';
import Footer from '~/components/website/footer';
import Navbar from '~/components/website/navbar';
import WebsiteRoutes from '~/routes/website';

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
        <Footer />
      </>
    );
  }
}

export default Main;
