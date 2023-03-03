import filterReducer from './filters/reducer';
import todosReducer from './todos/reducer';
import { combineReducers } from "redux";
 const rootReducer = combineReducers({
    todos : todosReducer,
    filters : filterReducer
});
export default rootReducer;