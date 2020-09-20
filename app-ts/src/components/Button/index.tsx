import React, { ButtonHTMLAttributes } from 'react';

import { Btn } from './styles.';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name, ...rest }) => {
  return (
    <Btn {...rest}>
      <strong>{name}</strong>{' '}
    </Btn>
  );
};

export default Button;
