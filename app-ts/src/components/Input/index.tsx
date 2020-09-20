import React, { InputHTMLAttributes, useEffect } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  useEffect(() => {
  }, [name]);

  return (
    <>
      <Container>
        <label>{label}</label>
        <input name={name}  {...rest} />
      </Container>
    </>
  );
};

export default Input;
