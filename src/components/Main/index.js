import React, {useCallback} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames/bind';
import {Button} from 'antd';

import errorImg from 'IMAGES/error-page-icon.png';
import {ROUTE__PAGE1, ROUTE__PAGE2} from 'constants/routes';
import {logout} from 'actionCreators/auth';
import Page1 from '../Page1';
import Page2 from '../Page2';
import styles from './styles.css';

const cx = classNames.bind(styles);

const getUsernameSelector = state => state.auth.user?.name;

const Main = () => {
  const dispatch = useDispatch();
  const username = useSelector(getUsernameSelector);

  const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <div className={cx('container')}>
      <header>
        <img className={cx('logo')} src={errorImg} alt="logo" />
        {username && (
          <span className={cx('greeting')}>
            <span>Hello </span>
            <span className={cx('username')}>{username}</span>
          </span>
        )}
        <Button onClick={handleLogout}>Logout</Button>
      </header>
      <aside>Sidebar</aside>
      <main>
        <Switch>
          <Route path={ROUTE__PAGE1} component={Page1} />
          <Route path={ROUTE__PAGE2} component={Page2} />
          <Redirect to={ROUTE__PAGE1} />
        </Switch>
      </main>
      <footer />
    </div>
  );
};

export default React.memo(Main);
