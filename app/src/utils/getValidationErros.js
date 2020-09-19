export default function isAuthteticated(err) {
  let jwt = localStorage.getItem('@Mvpproject:jwt');
  console.log('isAuthteticated');
  if (jwt) {
    return true;
  } else {
    return false;
  }
  return false;
}
