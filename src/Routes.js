import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

import {ROUTE__LOGIN, ROUTE__MAIN} from 'src/constants/routes.ts';
import ApiService from 'src/services/ApiService';
import {init, uninit} from 'src/store/slices/appInit';
import {logout} from 'src/store/slices/auth';
import Login from 'src/views/Login';
import Main from 'src/views/Main';

class Routes extends React.PureComponent {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    appInit: PropTypes.func.isRequired,
    appUninit: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {appInit} = this.props;

    ApiService.init(this.props.logout);
    appInit();
  }

  componentWillUnmount() {
    const {appUninit} = this.props;

    appUninit();
    ApiService.uninit();
  }

  render() {
    const {isAuthenticated} = this.props;

    if (!isAuthenticated) {
      return (
        <Switch>
          <Route path={ROUTE__LOGIN} exact component={Login} />
          <Redirect to={ROUTE__LOGIN} />
        </Switch>
      );
    }

    return (
      <Switch>
        <Route path={ROUTE__MAIN} component={Main} />
        <Redirect to={ROUTE__MAIN} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  logout,
  appInit: init,
  appUninit: uninit,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
