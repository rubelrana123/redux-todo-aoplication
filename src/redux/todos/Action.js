import {DELETED, ALLCOMPLETED,COLORSELECTED, CLEARECOMPLETED,ADDED, TOGGLED} from "./ActionTypes.js";

export const deleted = (id) => {
    return {
        value : DELETED,
        payload : id
    }
}
export const allcompleted = () => {
    return{
        value : ALLCOMPLETED
    }
}
export const clearcompleted = () =>{
    return {
        value : CLEARECOMPLETED
    }
}
export const added = (todoText) => {
    return {
        value : ADDED,
        payload : todoText
    }
}
export const colorselected = (todoId, color) => {
    return{
        type : COLORSELECTED,
        payload : {
            todoId,
            color
        }
    }

}
export const toggled = (todoId) => {
    return {
        valuie : TOGGLED,
        payload : todoId
    }
}