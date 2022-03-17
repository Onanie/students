import * as actionTypes from './actionTypes';

export const selectUser = (user: any) => {
  return {
    type: actionTypes.SET_USER,
    payload: user,
  };
};
export const setSearch = (text: any) => {
  return {
    type: actionTypes.SET_SEARCH,
    payload: text,
  };
};
