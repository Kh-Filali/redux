import { ADD_TODO, DELETE_TODO, DONE_UNDONE } from "../actionstypes/ActionsTypes";

export const addTodo = (todo) => {
  return { type: ADD_TODO, payload: todo };
};

export const deleteTodo = (id) => {
  return { type: DELETE_TODO, payload: id };
};

export const completeTodo = (id) => {
  return { type: DONE_UNDONE, payload: id };
};