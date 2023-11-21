import './App.css';
import { useState } from 'react'
import TodoForm from './components/Todos/TodoForm.js';
import TodoList from './components/Todos/TodoList.js';
import { w4 as uuidv4 } from 'uuid'

function App() {

  const [todos, setTodos] = useState([]);
  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }

    setTodos([...todos, text]);
  }

  const deleteTodoHendler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <div className="App">
      <h1>TodoApp</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHendler} />
    </div>
  );
}

export default App;
