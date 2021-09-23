import React from 'react'
import Todo from '../models/Todo'

const TodoItem: React.FC<{todo : Todo}> = ({todo}) => {
    return (
        <li> {todo.text}</li>
    )
}

export default  TodoItem
