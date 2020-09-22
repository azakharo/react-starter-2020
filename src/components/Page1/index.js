import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Button} from 'antd';
import classNames from 'classnames/bind';

import errorImg from 'IMAGES/error-page-icon.png';
import makeRequest from 'actionCreators/page1';
import styles from './styles.css';

const cx = classNames.bind(styles);

const Page1 = () => {
  const dispatch = useDispatch();

  const handleButtonClick = useCallback(() => {
    dispatch(makeRequest());
  }, [dispatch]);

  return (
    <>
      <div className={cx('certificates')} />
      <img src={errorImg} alt="Error" />
      <Button
        type="primary"
        onClick={handleButtonClick}
        className={cx('main-button')}>
        Send request
      </Button>
    </>
  );
};

export default React.memo(Page1);
