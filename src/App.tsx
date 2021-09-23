
import './App.css';
import Todos from './component/Todos';

function App() {
  return (
    <div className="App">
      <Todos items={["1", "2"]}/>
    </div>
  );
}

export default App;
