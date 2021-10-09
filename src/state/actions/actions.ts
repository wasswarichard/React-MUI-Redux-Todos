import { Dispatch } from "redux"
import * as actions from "../actionTypes/actionTypes";
import { IDESCRIPTION, ITODO } from "../../types/types";

export const todoApproved = (description: IDESCRIPTION) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: actions.TODO_APPROVED,
            payload: description
        })
    }
}

export const todoDeclined = (description: IDESCRIPTION) => {
    return(dispatch: Dispatch) => {
       dispatch({
           type: actions.TODO_DECLINED,
           payload: description
       })
    }
}

export const todosAdded = (description: ITODO[]) => {
    return(dispatch: Dispatch) => {
        dispatch({
            type: actions.TODOS_ADDED,
            payload: description
        })
    }
}