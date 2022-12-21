import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

import { AiFillDelete, AiFillEdit, } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { Todo } from '../../Model'
import './style.css'



type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo = ({ todo, todos, setTodos }: Props) => {

  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)


  function handleDone(id: number) {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
  }


  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(
      todos.map((todo) => todo.id === id ? { ...todo, todo: editTodo } : todo)
    )
    setEdit(false)
  }
  function handleDelete(id: number) {
   
    const foundIndexItem = todos.findIndex((item) => item.id === id)
    const copyArray = [...todos]
    copyArray.splice(foundIndexItem, 1)
    setTodos(copyArray)
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return (
    <form className='todos_single' onSubmit={(e) => handleEdit(e, todo.id)}>

      {edit ? (
        <input ref={inputRef} className='todos_single_text' value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
      ) :
        (

          todo.isDone ? (
            <s className='todos_single_text'>{todo.todo}</s>
          ) : (
            <span className='todos_single_text'>{todo.todo}</span>
          )

        )}

      <div>
        <span
          className='icon'
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit)
            }
          }}

        >
          <AiFillEdit />
        </span>
        <span className='icon' onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className='icon' onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>

    </form >
  )
}

export default SingleTodo
