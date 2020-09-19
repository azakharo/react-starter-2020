import React from "react";
import { hot } from 'react-hot-loader/root';

import Page1 from './page1';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <Page1 />
      </>
    );
  }
}

export default hot(App);
