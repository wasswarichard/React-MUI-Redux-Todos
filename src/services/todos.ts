import { status } from '../constants/status';
import { ITODO } from '../interface/types';
import { IACTION } from '../state/reducer/todosReducer';

const sortTodos = (todos: ITODO[]) => {
  let formattedTodos: ITODO[] = [];
  status.forEach((status: string) => {
    const newTodos = todos.filter((todo: ITODO) => todo.status === status);
    formattedTodos.push(...newTodos);
  });
  return formattedTodos.reverse();
};

const approveTodo = ({ state, action }: { state: ITODO[]; action: IACTION }) => {
  const approvedStatusIndex = status.findIndex((element: string) => element === action.payload.status);
  const approvedTodoIndex = state.findIndex((element: { id: number }) => element.id === action.payload.id);
  state[approvedTodoIndex] = {
    ...state[approvedTodoIndex],
    status: status[approvedStatusIndex + 1],
  };
  return sortTodos(state);
};

const declineTodo = ({ state, action }: { state: ITODO[]; action: IACTION }) => {
  const declinedStatusIndex = status.findIndex((element: string) => element === action.payload.status);
  const declinedTodoIndex = state.findIndex((element: { id: number }) => element.id === action.payload.id);
  state[declinedTodoIndex] = {
    ...state[declinedTodoIndex],
    status: status[declinedStatusIndex - 1],
  };
  return sortTodos(state);
};

export const todoService = { sortTodos, approveTodo, declineTodo };
