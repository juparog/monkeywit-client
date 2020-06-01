import React from 'react';

import Main from '~/components/website/Main';

/**
 * retorna un array con las la configuracion de rutas
 * principales del sitio
 *
 * @return {Array} default
 */
export default [
  {
    path: '/',
    component: Main,
  },
  {
    component: <h1>404!, no se encontro esta pagina</h1>,
  },
];
