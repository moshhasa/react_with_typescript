
import { useState } from 'react';
import './App.css';
import NewTodo from './component/NewTodo';
import Todos from './component/Todos';
import Todo from './models/Todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
 
  const addToTodoHandler = (todo: Todo) => setTodos((prevState) =>  [todo, ...prevState])
  const removeTodoHandler = (id : string) => { 
    setTodos((prevState) => prevState.filter(todo => todo.id !== id));
  }
  
  return (
    <div className="App">
      <NewTodo onAddTodo={addToTodoHandler}/>
      <Todos onRemoveTodo={removeTodoHandler} items={todos}/>
    </div>
  );
}

export default App;
