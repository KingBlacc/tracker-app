import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload};
        case 'successful_auth':
            return {errorMessage: '', token: action.payload};
        case 'clear_error_message': 
            return {...state, errorMessage: ''};
        case 'signout':
            return {token: null, errorMessage: ''};
        default:
            return state;
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({type: 'signin', payload: token});
        navigate('TrackList');
    }else{
        navigate('Signup');
    }
};

const signup = (dispatch) => async ({ email, password} ) => {
    try {
        const response = await trackerApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'successful_auth', payload: response.data.token});

        navigate('TrackList');
    } catch (error) {
        dispatch({ type: 'add_error', payload: 'Signup failed, try again'})
    }
};

const signin = (dispatch) => async ({email, password}) =>{
    try {
        const response = await trackerApi.post('signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'successful_auth', payload: response.data.token});

        navigate('TrackList');
    } catch (error) {
        dispatch({ type: 'add_error', payload: 'Signin failed, try again'})
    }
};

const signout = dispatch => async ({email, password}) => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout'});
    navigate('loginFlow');
};

export const {Provider, Context} =createDataContext(
    authReducer, 
    {signin, signout, signup, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage: ''}
)