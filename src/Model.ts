export interface Todo {
  id: number;
  todo: string;
  isDone: boolean
}


import { useReducer } from "react";

type Actions =
  | { type: 'ADD', payload: string }
  | { type: 'REMOVE', payload: number }
  | { type: 'DONE', payload: number };


const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case 'ADD':

      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false }
      ];
    case 'REMOVE':

      return state.filter((todo) => todo.id !== action.payload)



    case 'DONE':
      return state.map((todo => todo.id !== action.payload ? { ...todo, isDone: !todo.isDone } : todo))


  }
}