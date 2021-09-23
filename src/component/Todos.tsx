import { useContext } from "react";
import TodoContext from "../store/todo-context";
import TodoItem from "./TodoItem"
import styles from './Todos.module.css';

const Todos: React.FC = () => {
    const context = useContext(TodoContext);
    return (
        <ul className={styles.todos}>
           {context.items.map((todo) => <TodoItem todo={todo} key={todo.id}/> )}
        </ul>
    )
}

export default Todos
