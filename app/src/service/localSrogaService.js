export function cleanLocalStorage() {
  localStorage.clear();
}

export function updateLocalStorage(email, token) {
  localStorage.setItem('@Mvpproject:email', email);
  localStorage.setItem('@MvpprojectJ:jwt', token);
}

export function getToken() {
  console.log("pegouToken")
  return localStorage.getItem('@Mvpproject:jwt');
}

export function setJwtToLocalStorage(jwt) {
  sessionStorage.setItem('@Mvpproject:jwt', `Bearer ${jwt}`);
}
