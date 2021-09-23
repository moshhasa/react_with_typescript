import React, { useContext, useRef } from "react"
import Todo from "../models/Todo";
import TodoContext from "../store/todo-context";
import styles from './NewTodo.module.css';

const NewTodo:React.FC = () => {
    const context = useContext(TodoContext);
    const todoInputRef = useRef<HTMLInputElement>(null);

    const addTodoSubmitHandler = (e : React.FormEvent) => {
        e.preventDefault();

        //
        const enteredText = todoInputRef.current!.value;
        if(enteredText.length === 0 ){
            return;
        }

        const todo = new Todo(enteredText);
        context.addTodo(todo);
        todoInputRef.current!.value = '';
    }


    return (
        <form onSubmit={addTodoSubmitHandler} className={styles.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoInputRef}/>
            <button> Add todo</button>
        </form>
    )
}

export default NewTodo
