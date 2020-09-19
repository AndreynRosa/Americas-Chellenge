export function authenticate(email, password) {
  console.log("action")
  return {
    type: 'ASYNC_POST_AUTH',
    payload: {
      email,
      password,
    },
  };
}
