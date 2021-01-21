import React, { useContext, useState } from "react"
import {
    Form, Button, Input, InputGroup, FormGroup, Container, InputGroupAddon
} from "reactstrap"
import { FaPlus } from "react-icons/fa"
import { TodoContext } from "./Context"
import { v4 } from "uuid"
import "./TodoForm.css"
function TodoForm() {
    const [todoState, settodoState] = useState("")
    const { dispatch } = useContext(TodoContext)
    const handleSubmit = e => {
        e.preventDefault();
        if (todoState === "") {
            return alert("Please enter text!")
        }
        const todo = {
            todoState,
            id: v4()
        }
        dispatch({
            type: "ADD",
            payload: todo
        })
        settodoState("")
    }
    return (
        <Container className="fluid">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <InputGroup>
                        <Input type="text" type="text" name="todo" id="todo" placeholder="Your text here!" onChange={e => settodoState(e.target.value)} value={todoState} className="inp"/>
                        
                        <Button color="secondary"><FaPlus /></Button>
                    </InputGroup>
                </FormGroup>
            </Form>
        </Container>
    )
}
export default TodoForm