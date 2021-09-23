import React from 'react';
import Todo from '../models/Todo';

export interface ITodosContext{
    items : Todo[],
    addTodo : (todo: Todo) => void,
    removeTodo : (id: string) => void
};

const TodoContext = React.createContext<ITodosContext>({
    items : [],
    addTodo : (todo: Todo) => {},
    removeTodo : (id: string) => {}
})



export default TodoContext