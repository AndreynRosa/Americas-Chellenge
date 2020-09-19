const INITIAL_STATE = {
  projects: [],
};

export default function project(state, action) {
  if (!state) {
    state = INITIAL_STATE;
  }
  switch (action.type) {
    case 'GET_PROJECT_BY_ROLE':
      console.log('GET_PROJECT_BY_ROLE ', action);
      return {
        ...state,
        projects: [...action.payload.projects],
      };
    default:
      return state;
  }
}
