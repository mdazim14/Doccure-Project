import { combineReducers } from '@reduxjs/toolkit';
import user from './user/user.slice';

const rootReducer = combineReducers({
    user
});
export default rootReducer;