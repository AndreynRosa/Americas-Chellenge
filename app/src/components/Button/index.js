import React from 'react';

import { Btn } from './styles';

const Button = ({ name, ...rest }) => {
  return (
    <Btn {...rest}>
      <strong>{name}</strong>{' '}
    </Btn>
  );
};

export default Button;
