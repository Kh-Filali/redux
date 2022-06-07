import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../JS/actions/Action";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);

  return (
    <div>
      {todos.map((todo, i) => (
        <div key={todo.id}>
          <h1 style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
            {" "}
            {todo.text}{" "}
          </h1>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          <button onClick={() => dispatch(completeTodo(todo.id))}>
            {todo.isDone ? "unDone" : "Done"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;