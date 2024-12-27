import React, { useState } from 'react';
import axios from 'axios';
import '../styles/TodoForm.css';

function TodoForm({ fetchTodos }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (title.trim()) {
        await axios.post('http://localhost:5000/api/todos', { title });
        setTitle(''); // Reset input after submission
        fetchTodos();
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
