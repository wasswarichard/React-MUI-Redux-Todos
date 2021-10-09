import * as actions from "../actionTypes/actionTypes";
import {IDESCRIPTION, ITODO} from "../../types/types";

export const todoApproved = (description: IDESCRIPTION) => ({
    type: actions.TODO_APPROVED,
    payload: description
})

export const todoDeclined = (description: IDESCRIPTION) => ({
    type: actions.TODO_DECLINED,
    payload: description
})

export const todosAdded = (description: ITODO[] ) => ({
    type: actions.TODOS_ADDED,
    payload: description

})