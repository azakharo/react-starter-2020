import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {IconButton, InputAdornment} from '@material-ui/core';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';

const ShowHidePasswordButton = ({showPassword, onShowPasswordChange}) => {
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={onShowPasswordChange}
      >
        {showPassword ? (
          <VisibilityOutlinedIcon />
        ) : (
          <VisibilityOffOutlinedIcon />
        )}
      </IconButton>
    </InputAdornment>
  );
};

ShowHidePasswordButton.propTypes = {
  showPassword: PropTypes.bool.isRequired,
  onShowPasswordChange: PropTypes.func.isRequired,
};

export default memo(ShowHidePasswordButton);
