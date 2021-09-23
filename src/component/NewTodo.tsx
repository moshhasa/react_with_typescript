import React, { useRef } from "react"
import Todo from "../models/Todo";

const NewTodo:React.FC<{onAddTodo : (todo : Todo) => void}> = ({onAddTodo}) => {
    const todoInputRef = useRef<HTMLInputElement>(null);

    const addTodoSubmitHandler = (e : React.FormEvent) => {
        e.preventDefault();

        //
        const enteredText = todoInputRef.current!.value;
        if(enteredText.length === 0 ){
            return;
        }
        
        const todo = new Todo(enteredText);
        onAddTodo(todo);
    }


    return (
        <form onSubmit={addTodoSubmitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoInputRef}/>
            <button> Add todo</button>
        </form>
    )
}

export default NewTodo
