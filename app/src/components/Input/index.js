import React, { useEffect } from 'react';
import { Container } from './styles';

const Input = ({ label, name, ...rest }) => {
  useEffect(() => {
  }, [name]);

  return (
    <>
      <Container>
        <label> {label}</label>
        <input name={name} {...rest} />
      </Container>
    </>
  );
};

export default Input;
