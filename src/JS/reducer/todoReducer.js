import { ADD_TODO, DELETE_TODO, DONE_UNDONE } from "../actionstypes/ActionsTypes";

const initialState = {
  todos: [
    {
      id: Math.random(),
      text: "Todo one",
      isDone: false,
    },
    {
      id: Math.random(),
      text: "Todo two",
      isDone: false,
    },
  
  ],
};

const todoReducer = (state = initialState, { type, payload }) => {
  // const todoReducer = (state , action ) => {

  switch (type) {
    case DONE_UNDONE:
      return {
        ...state,
        todos: state.todos.map((todo, i) =>
          todo.id == payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, i) => todo.id !== payload),
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    default:
      return state;
  }
};

export default todoReducer;