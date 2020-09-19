import React from 'react';
import PropTypes from 'prop-types';
import {hot} from 'react-hot-loader/root';

import Page1 from './page1';
import './App.css';

class App extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    const {name} = this.props;
    return (
      <>
        <h1>Hello {name}</h1>
        <Page1 />
      </>
    );
  }
}

export default hot(App);
