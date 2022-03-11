import React from "react";
import { Todo } from "../model";

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.todo}</li>
      ))}
    </div>
  );
};

export default TodoList;
