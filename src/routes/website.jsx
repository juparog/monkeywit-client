import React from 'react';
import Home from '~/components/website/home';

/**
 * retorna un array con las la configuracion de rutas
 * para la pagina principales para react-router-dom
 *
 * @return {Array} default
 */
export default [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/home',
    component: Home,
  },
  {
    path: '*',
    component: <div>Ruta no encontrada!</div>,
  },
];
