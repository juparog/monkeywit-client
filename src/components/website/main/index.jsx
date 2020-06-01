import React, { PureComponent } from 'react';
import { Switch } from 'react-router-dom';

import RouteWithSubRoutes from '~/components/utils/RouteWithSubRoutes';
import Footer from '~/components/website/Footer';
import Navbar from '~/components/website/Navbar';
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
