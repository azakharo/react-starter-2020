import React, {useCallback} from "react";
import {useDispatch} from 'react-redux';

import makeRequest from "../actionCreators/page1";

const Page1 = () => {
  const dispatch = useDispatch();

  const handleButtonClick = useCallback(() => {
    dispatch(makeRequest());
  }, [dispatch]);

  return <button onClick={handleButtonClick}>Send request</button>
}

export default React.memo(Page1);
