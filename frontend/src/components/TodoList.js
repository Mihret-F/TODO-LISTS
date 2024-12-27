import React from 'react';
import axios from 'axios';
import '../styles/TodoList.css';

function TodoList({ todos, fetchTodos }) {
  const toggleComplete = async (id, completed) => {
    try {
      await axios.put(`http://localhost:5000/api/todos/${id}`, { completed: !completed });
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo._id} className="todo-item">
          <span
            className={todo.completed ? 'completed' : ''}
            onClick={() => toggleComplete(todo._id, todo.completed)}
          >
            {todo.title}
          </span>
          <button onClick={() => deleteTodo(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
