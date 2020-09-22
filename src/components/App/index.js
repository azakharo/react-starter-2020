import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

import Page1 from 'components/Page1';
import Page2 from 'components/Page2';
import './styles.css';

class App extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    const {name} = this.props;

    return (
      <>
        <h1>Hello {name}</h1>

        <Switch>
          <Route path="/page1" exact component={Page1} />
          <Route path="/page2" exact component={Page2} />
          <Redirect to="/page1" />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
