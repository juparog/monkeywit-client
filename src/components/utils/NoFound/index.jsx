import React, { PureComponent } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

class NoFound extends PureComponent {
  render() {
    return (
      <div id="nofound-container" className="p-4 mt-main">
        <Card bg="secondary text-center w-75">
          <Card.Body>
            <h1 className="display-2 text-primary">
              <span className="text-danger">O</span>
              ops!
            </h1>
            <h1 className="text-white">
              <FontAwesomeIcon icon="unlink" />
              {' '}
              Página no encontrada
            </h1>
            <p>
              <Link to="/" className="btn btn-primary border-5">Ir al Inicio</Link>
            </p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default NoFound;
