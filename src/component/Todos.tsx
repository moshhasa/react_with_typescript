import Todo from "../models/Todo"
import TodoItem from "./TodoItem"
import styles from './Todos.module.css';

const Todos: React.FC<{items : Todo[], onRemoveTodo :(id: string) => void}> = ({items, onRemoveTodo}) => {
    return (
        <ul className={styles.todos}>
           {items.map((todo) => <TodoItem todo={todo} key={todo.id} onClick={onRemoveTodo}/> )}
        </ul>
    )
}

export default Todos
