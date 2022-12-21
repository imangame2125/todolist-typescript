import React, { useState, FC } from "react";

import './App.css'
import InputFeild from "./components/TodoListApp/InputFeild";
import TodoList from "./components/TodoListApp/TodoList";
import { Todo } from "./Model";

const TodoApp: FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo('')
    }
  }


  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default TodoApp;

