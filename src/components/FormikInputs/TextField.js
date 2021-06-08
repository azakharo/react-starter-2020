import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {useFormikContext, getIn} from 'formik';

import BaseTextField from 'src/components/TextField';

const TextField = memo(({name, ...restProps}) => {
  const {touched, errors, values, handleBlur, handleChange} =
    useFormikContext();
  const isTouched = getIn(touched, name);
  const error = getIn(errors, name);
  const value = getIn(values, name);

  return (
    <BaseTextField
      name={name}
      error={Boolean(isTouched && error)}
      helperText={isTouched && error}
      onBlur={handleBlur}
      onChange={handleChange}
      value={value}
      {...restProps}
    />
  );
});

TextField.propTypes = {
  name: PropTypes.string.isRequired,
};

TextField.inputTypes = BaseTextField.inputTypes;

export default TextField;
