import { useState } from "react"
import Todo from "../models/Todo";
import TodoContext, { ITodosContext } from "./todo-context"

const TodosContextProvider: React.FC = ({children}) => {
    const [todos, setTodos] = useState<Todo[]>([])
 
    const addToTodoHandler = (todo: Todo) => setTodos((prevState) =>  [todo, ...prevState])
    const removeTodoHandler = (id : string) => { 
      setTodos((prevState) => prevState.filter(todo => todo.id !== id));
    }
    
    const cnotextValue:ITodosContext = {
        items : todos,
        addTodo : addToTodoHandler,
        removeTodo : removeTodoHandler
    }

    return (
        <TodoContext.Provider value={cnotextValue}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodosContextProvider
