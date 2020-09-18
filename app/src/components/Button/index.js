import React from 'react';

import { Btn } from './styles';

const Button = ({ name, ...rest }) => {
  return <Btn {...rest}> {name} </Btn>;
};

export default Button;
