export function findProjectsByRoleAcess() {
  console.log("action get projects")
  return {
    type: 'ASYNC_FIND_PROJECT_BY_ROLE',
    payload: {
      projects: []
    },
  };
}
