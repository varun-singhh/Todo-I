import React, { useReducer } from 'react'
import { Container } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from "./Components/reducer"
import { TodoContext } from "./Components/Context.js"
import TodoForm from './Components/TodoForm';
import Todo from './Components/Todo';
import Header from './Components/Header';

function App() {
  const [todo, dispatch] = useReducer(reducer, [])
  console.log(todo)
  return (
    <TodoContext.Provider value={{ todo, dispatch }}>

        <Header/>
        <Todo />
        <TodoForm />
        <footer>
        <i style={{bottom:"0px",display:"flex",justifyContent:"center",color:"#758283"}}>copyright 2021, All rights reserved</i>
      </footer>
    </TodoContext.Provider>
  )
}

export default App

