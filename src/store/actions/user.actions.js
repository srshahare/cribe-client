import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';   

export const userActions = {
    login,
    logout,
    getAll
};


function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));
        userService.login(email, password)
            .then(
                user => { 
                    console.log('user', user)
                    dispatch(success(user));
                    history.push('/cribe-client/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    history.push('/cribe/client/')
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());
        userService.getAll()
            .then(
                user => dispatch(success(user)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(user) { return { type: userConstants.GETALL_SUCCESS, user } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}