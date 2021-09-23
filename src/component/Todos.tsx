import Todo from "../models/Todo"
import TodoItem from "./TodoItem"

const Todos: React.FC<{items : Todo[]}> = (props) => {
    return (
        <ul>
           {props.items.map((todo) => <TodoItem todo={todo} key={todo.id} /> )}
        </ul>
    )
}

export default Todos
