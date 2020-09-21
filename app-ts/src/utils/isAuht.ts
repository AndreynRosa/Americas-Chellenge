export default function isAuthteticated() {
  let jwt = localStorage.getItem('@Mvpproject:jwt');
  if (jwt) {
    return true;
  }
  return false;
}
