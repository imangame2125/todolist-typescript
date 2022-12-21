import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <App />

);

// interface User {
//   id?: string;
//   name?: string;
// }

// const UserContext = createContext<User>({
//   id: undefined,
//   name: undefined
// })

// const user = useContext(UserContext);