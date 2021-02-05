export const getResponse = (response) => {
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    let base64Url = response.data.token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  } else {
    console.log('Error');
  }
};
