export function cleanLocalStorage() {
  sessionStorage.clear();
}

export function setEmailToLocalStorage(email: string) {
  sessionStorage.setItem('@Mvpproject:email', email);
}

export function getEmailToLocalStorage() {
  return sessionStorage.getItem('@Mvpproject:email');
}
export function getToken() {
  let jwt = sessionStorage.getItem('@Mvpproject:jwt');
  return jwt;
}

export function setJwtToLocalStorage(jwt: string) {
  sessionStorage.setItem('@Mvpproject:jwt', `${jwt}`);
}
