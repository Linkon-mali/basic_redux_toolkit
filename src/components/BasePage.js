import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataAction, LogoutAction } from '../redux/actions';

const BasePage = () => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getDataAction())
    }, []);

  return (
    <div>
        <p>Welcome</p>
        <p>Phone: {auth.phone}</p>
        <p>Title: {auth.data.title}</p>
        <button onClick={() => dispatch(LogoutAction())}>Log out</button>
    </div>
  )
}

export default BasePage