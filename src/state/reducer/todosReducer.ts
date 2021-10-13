import * as actions from '../actionTypes/actionTypes';
import { ITODO } from '../../interface/types';
import { initialState } from '../initialState';
import { todoService } from '../../services/todos';

export interface IACTION {
  payload: any;
  type: string;
}

export default function todosReducer(state: ITODO[] = initialState.todos, action: IACTION) {
  switch (action.type) {
    case actions.TODOS_ADDED:
      return [...state, ...action.payload];

    case actions.TODO_APPROVED:
      return todoService.approveTodo({ state, action });

    case actions.TODO_DECLINED:
      return todoService.declineTodo({ state, action });

    default:
      return state;
  }
}
