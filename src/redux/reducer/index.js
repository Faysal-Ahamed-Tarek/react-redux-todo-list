import { combineReducers } from "redux";
import {TodoList_Reducer } from './todo';

const RootReducer = combineReducers({
    TodoList:TodoList_Reducer
});
export default RootReducer;