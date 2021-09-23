import React from 'react'
import Todo from '../models/Todo'
import styles from './TodoItem.module.css';

const TodoItem: React.FC<{todo : Todo, onClick : (id : string) => void}> = ({todo, onClick}) => {
    return (
        <li className={styles.item} onClick={onClick.bind(null, todo.id)}> {todo.text}</li>
    )
}

export default  TodoItem
