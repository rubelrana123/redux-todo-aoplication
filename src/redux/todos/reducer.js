import {DELETED, ALLCOMPLETED,COLORSELECTED, CLEARECOMPLETED,ADDED, TOGGLED} from "./ActionTypes.js";
import { initialState } from "./initialState";

const nextTodoId = (todos) => {
    const maxId = todos.reduce(
        (maxId, todos) => Math.max(todos,maxId),
        0
      );
      return maxId + 1
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
           return [
            ...state,
            {
                id : nextTodoId(state)
            }
           ]
        case TOGGLED : 
        return state.map(todo => {
            if(todo.id !== action.payload){
                return todo;
            }
            return {
                ...todo,
                completed : !todo.completed
    
            }
        })
     
        case COLORSELECTED : 
        const {todoId, color} = action.payload;
        return state.map(todo => {
            if(todo.id !== todoId) {
                return todo;
            }
            return{
                ...todo,
                color
            }
        })
        case DELETED :
            return state.filter(todo => todo.id !== action.payload)
   
        case ALLCOMPLETED :
            return  state.map(todo => {
                return {
                    ...todo,
                    completed : true
                }
            })
        case CLEARECOMPLETED :
            return  state.map(todo => !todo.completed)
   
        default:
          return state;
    }
}