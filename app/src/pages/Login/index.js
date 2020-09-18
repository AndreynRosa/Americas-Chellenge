import React, { useCallback, useRef, useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';

import Input from '../../components/Input';

import { Container, Form } from './styles';

const Login = () => {
  const history = useHistory();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    history.push('/projects');
  }, []);

  useEffect(() => {
    console.log('useRef.current');
  }, []);

  return (
    <>
      <Container>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Input name="email" placeHolder={'Email'} />
          <Input name="password" type="password" placeHolder={'Password'} />

          <Button style={{ marginTop: '2%' }} type="submit" name={'Login'} />
        </Form>
      </Container>
    </>
  );
};

export default Login;
