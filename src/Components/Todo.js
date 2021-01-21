import React, { useContext} from 'react'
import {
    ListGroup, ListGroupItem
} from "reactstrap"
import { FaTrash, FaStrikethrough } from "react-icons/fa"
import { TodoContext } from "./Context.js"
import "./Todo.css"
const Todo = () => {
    const { todo, dispatch } = useContext(TodoContext)
    console.log(todo);
    return (
        <ListGroup className="mt-5 mb-2 items">
            {todo.map(todo => (
                <ListGroupItem key={todo.id} className="lis">
                    <h4>{todo.todoState}</h4>
                    <span className="float-right" style={{ cursor: "pointer" }}
                        onClick={() => {
                            dispatch({
                                type: "DEL",
                                payload: todo.id
                            })
                        }}
                    ><FaTrash /></span>
                </ListGroupItem >
            ))}
        </ListGroup>
    )
}
export default Todo