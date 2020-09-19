export function authenticate(email, password) {
  return {
    type: 'ASYNC_POST_AUTH',
    payload: {
      email,
      password,
    },
  };
}
