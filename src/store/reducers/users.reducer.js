import { userConstants } from '../constants';

export function user(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        me: action.user,
        loading: false
      };
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}