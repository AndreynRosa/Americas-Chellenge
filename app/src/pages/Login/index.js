import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';

import Input from '../../components/Input';
import { authenticate } from '../../store/actions/auth';

import { Container, Form } from './styles';

const Login = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await dispatch(authenticate(email, password));
      history.push('/project');
    } catch (e) {
      alert('Unespect error');
    }
  }, [dispatch, history]);

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
