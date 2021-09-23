
import { useState } from 'react';
import './App.css';
import NewTodo from './component/NewTodo';
import Todos from './component/Todos';
import Todo from './models/Todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
 
  const addToTodoHandler = (todo: Todo) => setTodos((prevState) =>  [todo, ...prevState])
  
  return (
    <div className="App">
      <NewTodo onAddTodo={addToTodoHandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
