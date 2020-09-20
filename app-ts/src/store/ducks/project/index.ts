import { ActionType } from 'typesafe-actions';
const INITIAL_STATE = {
  data: [],
  details: [],
};

export default function project(
  state = INITIAL_STATE,
  action: ActionType<any>
) {
  switch (action.type) {
    case 'FIND_PROJECT_BY_ROLE':
      console.log('FIND_PROJECT_BY_ROLE', action);
      return {
        ...state,
        data: action.payload.data,
        details: action.payload.details,
      };
    case 'UPDATE_PROJECT_TIME':
      return {
        ...state,
        data: action.payload.projects,
      };

    default:
      return state;
  }
}
