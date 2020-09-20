export function cleanLocalStorage() {
  sessionStorage.clear();
}

export function updateLocalStorage(email: string, token: string) {
  sessionStorage.setItem('@Mvpproject:email', email);
  sessionStorage.setItem('@MvpprojectJ:jwt', token);
}

export function getToken() {
  let jwt = sessionStorage.getItem('@Mvpproject:jwt');
  return jwt
}

export function setJwtToLocalStorage(jwt: string) {
  sessionStorage.setItem('@Mvpproject:jwt', `${jwt}`);
}
