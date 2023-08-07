// AuthUtils.js
const AUTH_STORAGE_KEY = 'myAppAuthUserToken';

export function storeAuthToken(token) {
  localStorage.setItem(AUTH_STORAGE_KEY, token);
}

export function getAuthToken() {
  return localStorage.getItem(AUTH_STORAGE_KEY);
}

export function clearAuthToken() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}
