import React, { useContext } from 'react'
import Todo from '../models/Todo'
import TodoContext from '../store/todo-context';
import styles from './TodoItem.module.css';

const TodoItem: React.FC<{todo : Todo}> = ({todo}) => {
    const context = useContext(TodoContext);

    const removeTodoHandler = (id : string) => {
        context.removeTodo(id);
    }

    return (
        <li className={styles.item} onClick={removeTodoHandler.bind(null, todo.id)}> {todo.text}</li>
    )
}

export default  TodoItem
