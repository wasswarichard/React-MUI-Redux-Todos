import * as actions from "../actionTypes/actionTypes";
import { status } from "../../constants/status";
import { ITODO } from "../../types/types";

export interface IACTION {
    payload: ITODO[],
    type: string
}

export default function reducer(state: ITODO[] , action: any) {
    switch (action.type) {
        case actions.TODOS_ADDED:
            return [...state, ...action.payload]

        case actions.TODO_APPROVED:
            const statusIndex = status.findIndex(element => element === action.payload.status);
            const todoIndex = state.findIndex(element => element.id === action.payload.id);
            state[todoIndex] = {
                ...state[todoIndex],
                status: status[statusIndex + 1]
            }
            return state;

        case actions.TODO_DECLINED:
            const declinedStatusIndex = status.findIndex(element => element === action.payload.status);
            const declinedTodoIndex = state.findIndex(element => element.id === action.payload.id);
            state[declinedTodoIndex] = {
                ...state[declinedTodoIndex],
                status: status[declinedStatusIndex - 1]
            }
            return state;

        default:
            return state;
    }
}
