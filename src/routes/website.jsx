import NoFound from '~/components/utils/NoFound/';
import Home from '~/components/website/Home/';
import ShowVideo from '~/components/website/ShowVideo/';

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
    path: '/inicio',
    component: Home,
  },
  {
    exact: true,
    path: '/cursos/videos/:videoId',
    component: ShowVideo,
  },
  {
    path: '*',
    component: NoFound,
  },
];
