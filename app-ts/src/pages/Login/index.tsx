import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


import Button from '../../components/Button';
import Input from '../../components/Input';
import { authLoadRequest } from '../../store/ducks/auth/actions';
import { AuthUserState } from '../../store/ducks/auth/types';

import { Container, Form } from './styles';


interface RootState {
  auht: AuthUserState;
}

const Login = () => {

  const state = useSelector((state: RootState) => { return state.auht.isAuthUser });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      dispatch(authLoadRequest(email, password));
    } catch (e) {
      alert('Unespect error');
    }
  }, [dispatch]);


  useEffect(() => {

    if (state) {
      console.log("aqio")
      history.push('/project');
    }
  }, [state, history])

  return (
    <>
      <Container>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Input name="email" placeholder={'Email'} />
          <Input name="password" type="password" placeholder={'Password'} />

          <Button style={{ marginTop: '2%' }} type="submit" name={'Login'} />
        </Form>
      </Container>
    </>
  );
};

export default Login;
