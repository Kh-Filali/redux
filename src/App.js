import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <AddTodo />
      <TodoList />
    </header>
  </div>
  );
}

export default App;
