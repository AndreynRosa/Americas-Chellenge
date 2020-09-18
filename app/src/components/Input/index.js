import React, { useEffect, useRef, useState, useCallback } from 'react';
import { PropTypes } from 'prop-types';
import { Container } from './styles';

const Input = ({ label, name, ...rest }) => {
  useEffect(() => {
    console.log('nputRef.current?.targe', name);
  }, []);

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
