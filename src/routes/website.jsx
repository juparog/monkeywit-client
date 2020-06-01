import NoFound from '~/components/utils/pathNoFound';
import Home from '~/components/website/home';
import ShowVideo from '~/components/website/showVideo';

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
