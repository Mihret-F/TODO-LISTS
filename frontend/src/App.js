import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles/App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoForm fetchTodos={fetchTodos} />
      <TodoList todos={todos} fetchTodos={fetchTodos} />
    </div>
  );
}

export default App;
