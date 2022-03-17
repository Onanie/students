import {combineReducers} from 'redux';
import setUser from './selectUserReducer';

export default combineReducers({
  selectedUser: setUser,
});
