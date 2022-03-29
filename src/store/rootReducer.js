import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from '../redux/slice';

export const rootReducer = combineReducers({
    auth: authSlice.reducer // slice.js file console.log kore authSlice er vitore reducer name akta function ace, setai akhane input kora hoyece
})