import * as ActionTypes from '../Actions/actionTypes';

export default (user = null, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return action.payload;
  }
  return user;
};
