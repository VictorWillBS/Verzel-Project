import api from './api';
export async function signUp(userData) {
  const response = await api.post('/user/sign-up', userData);
  return response.data;
}
export async function signIn(userData) {
  const response = await api.post('/user/sign-in', userData);
  return response.data;
}
