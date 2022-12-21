import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
  return (
    <div className='container'>
      <header className='white-text'>
        <h1>Welcome to Website Iman Farahani.</h1>
      </header>
      <section className='main'>
        <div className='child-main'>
          <h1><Link to='/todo-list-app'>Todo-List</Link></h1>

        </div>
      </section>
    </div>
  )
}

export default Home
