import {STATUSCHANGED, COLORCHANGED} from "./ActionsType"
export const statusChanged = (status) => {
 return {
    value : STATUSCHANGED,
    payload : {
     status
    }
 }
}
export const colorchanged =(color, colorType) => {
    return {
        type : COLORCHANGED,
        payload :  {
           color,
           colorType
        }
    }
}