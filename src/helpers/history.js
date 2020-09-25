import history from '../history';

export const gotoRoute = (route, naviMethod = 'push') =>
  history[naviMethod](route);
