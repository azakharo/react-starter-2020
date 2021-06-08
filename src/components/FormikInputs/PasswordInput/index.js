import React, {memo, useMemo} from 'react';
import PropTypes from 'prop-types';

import TextField from 'src/components/FormikInputs/TextField';
import ShowHidePasswordButton from './ShowHidePasswordButton';

const PasswordInput = ({showPassword, onShowPasswordChange, ...restProps}) => {
  const showHidePasswordButton = useMemo(
    () => (
      <ShowHidePasswordButton
        showPassword={showPassword}
        onShowPasswordChange={onShowPasswordChange}
      />
    ),
    [showPassword, onShowPasswordChange],
  );

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: showHidePasswordButton,
        autoComplete: 'new-password',
      }}
      {...restProps}
    />
  );
};

PasswordInput.propTypes = {
  showPassword: PropTypes.bool.isRequired,
  onShowPasswordChange: PropTypes.func.isRequired,
};

export default memo(PasswordInput);
