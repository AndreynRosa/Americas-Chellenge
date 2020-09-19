export function cleanLocalStorage() {
  localStorage.clear();
}

export function updateLocalStorage(email, token) {
  localStorage.setItem('@Mvpproject:email', email);
  localStorage.setItem('@MvpprojectJ:jwt', token);
}

export function getToken() {
  let jwt = sessionStorage.getItem('@Mvpproject:jwt');
  return jwt
}

export function setJwtToLocalStorage(jwt) {
  sessionStorage.setItem('@Mvpproject:jwt', `${jwt}`);
}
