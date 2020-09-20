import { ActionType } from 'typesafe-actions';

const INITIAL_STATE = {
  isAuthUser: false,
};

export default function auth(state = INITIAL_STATE, action: ActionType<any>) {
  switch (action.type) {
    case 'POST_AUTH':
      console.log('state', state);
      return {
        ...state,
        isAuthUser: action.payload.isAuthUser,
      };
    default:
      return state;
  }
}
