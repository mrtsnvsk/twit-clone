export const getResponse = (response) => {
  localStorage.setItem('token', response.data.token);
  const t = response.data.token.split('.');
  return JSON.parse(window.atob(t[1]));
};