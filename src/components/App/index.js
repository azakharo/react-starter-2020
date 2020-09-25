import React from 'react';
// import PropTypes from 'prop-types';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

import Page1 from 'components/Page1';
import Page2 from 'components/Page2';
import Login from 'components/Login';
import './styles.css';

class App extends React.PureComponent {
  // static propTypes = {
  //   name: PropTypes.string,
  // };

  render() {
    return (
      <Switch>
        <Route path="/page1" exact component={Page1} />
        <Route path="/page2" exact component={Page2} />
        <Route path="/login" exact component={Login} />
        <Redirect to="/page1" />
      </Switch>
    );
  }
}

export default withRouter(App);
