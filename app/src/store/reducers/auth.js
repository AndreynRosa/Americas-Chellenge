const INITIAL_STATE = {
  isAuthUser: false,
};

export default function auth(state, action) {
  if (!state) {
    state = INITIAL_STATE;
  }
  switch (action.type) {
    case 'POST_AUTH':
      return {
        ...state,
        email: action.payload.email,
        isAuthUser: action.payload.isAuthUser
      };
    default:
      return state;
  }
}
