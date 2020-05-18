import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

class Footer extends PureComponent {
  render() {
    return (
      <div>
        <footer className="footer-container">
          <div className="footer-content row px-5 py-4">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <lu className="list-unstyled">
                <li><a href="/#" className="text-white">Contacto</a></li>
                <li><a href="/#" className="text-white">Quienes somos</a></li>
                <li><a href="/#" className="text-white">Preguntas frecuentes</a></li>
                <li className="text-white">
                  Redes sociales
                  <a href="/#" className="text-decoration-none">
                    &nbsp;&nbsp;
                    <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" className="text-danger" />
                  </a>
                  <a href="/#" className="text-decoration-none">
                    &nbsp;&nbsp;
                    <FontAwesomeIcon icon={['fab', 'facebook-square']} size="2x" className="text-primary" />
                  </a>
                  <a href="/#" className="text-decoration-none">
                    &nbsp;&nbsp;
                    <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" className="text-danger" />
                  </a>
                  <a href="/#" className="text-decoration-none">
                    &nbsp;&nbsp;
                    <FontAwesomeIcon icon={['fab', 'github']} size="2x" className="text-dark" />
                  </a>
                </li>
              </lu>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <lu className="list-unstyled">
                <li><a href="/#" className="text-white">Proyectos</a></li>
                <li><a href="/#" className="text-white">Colaboradores</a></li>
              </lu>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="input-group input-group-sm">
                <div className="input-group-prepend">
                  <span className="input-group-text">Subscríbete</span>
                </div>
                <input type="text" className="form-control fix-rounded-right" placeholder="ingrese su correo" required />
              </div>
            </div>
          </div>
          <div className="footer-bottom row px-5 py-2 bg-dark">
            <span className="text-white text-center w-100">Copyright © 2020 MonkeyWit todos los derechos reservados</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
