import React, { FC } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import TodoApp from '../../TodoApp'
import Home from './Home'

const ImanApps: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/todo-list-app' element={<TodoApp/>} />
        
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default ImanApps
