import axios from 'axios';

const API_KEY = 'AIzaSyCUlK-3zAzVM_c_jK6q9TqpeiqJxEsL6bE';

async function authenticate(mode: string, email: any, password: any) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log(response.data, '======');

  const token = response.data.idToken;

  return token;
}

export function createUser(email: any, password: any) {
  return authenticate('signUp', email, password);
}

export function login(email: any, password: any) {
  return authenticate('signInWithPassword', email, password);
}
