import { authSlice } from "./slice";
const {actions: slice} = authSlice;

// Login action
export const LoginAction = (phone) => (dispatch) => {
    dispatch(slice.setLogin(phone))
}

// Logout action
export const LogoutAction = () => (dispatch) => {
    dispatch(slice.setLogout())
}

// Get data action
export const getDataAction = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => dispatch(slice.setData(json)))
    .catch(error => console.log(error)) 
}