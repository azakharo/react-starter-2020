import React, {memo, useMemo} from 'react';
import PropTypes from 'prop-types';
import {TextField as BaseTextField} from '@material-ui/core';

// import PositiveNumber from './NumberInputs/PositiveNumber';

const inputTypes = {
  onlyPositive: 'onlyPositive',
};

const TextField = memo(({inputType, InputProps, ...restProps}) => {
  const patchedInputProps = useMemo(() => {
    if (!inputType) {
      return InputProps;
    }

    let inputComponent;
    switch (inputType) {
      // case inputTypes.onlyPositive:
      //   inputComponent = PositiveNumber;
      //   break;
      default:
        inputComponent = undefined;
    }

    return {
      inputComponent,
      ...InputProps,
    };
  }, [InputProps, inputType]);

  return <BaseTextField InputProps={patchedInputProps} {...restProps} />;
});

TextField.propTypes = {
  // Don't specify type="number", if use the following prop
  inputType: PropTypes.oneOf(Object.keys(inputTypes)),
  InputProps: PropTypes.shape({}),
};

TextField.inputTypes = inputTypes;

export default TextField;
