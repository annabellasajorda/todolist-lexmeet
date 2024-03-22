// App.jsx
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editing, setEditing] = useState(null);
  const [allCompleted, setAllCompleted] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
      setAllCompleted(storedTodos.every(todo => todo.completed));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    setAllCompleted(todos.every(todo => todo.completed));
  }, [todos]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (input.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
        createdAt: new Date().toLocaleString(),
        completedAt: null,
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      setTodos(updatedTodos);
    }
  };

  
  const toggleEdit = (id) => {
    setEditing(id);
    const todo = todos.find(todo => todo.id === id);
    setInput(todo.text);
  };

  const updateTodo = () => {
    if (input.trim() !== '') {
      setTodos(todos.map(todo => {
        if (todo.id === editing) {
          return { ...todo, text: input };
        }
        return todo;
      }));
      setEditing(null);
      setInput('');
    }
  };

  const toggleStatus = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        if (!todo.completed) {
          return { ...todo, completed: true, completedAt: new Date().toLocaleString() };
        } else {
          return { ...todo, completed: false, completedAt: null };
        }
      }
      return todo;
    }));
  };

  const deleteAll = () => {
    if (window.confirm('Are you sure you want to delete all todos?')) {
      setTodos([]);
    }
  };

  const doneAll = () => {
    setTodos(todos.map(todo => ({
      ...todo,
      completed: !allCompleted,
      completedAt: !allCompleted ? new Date().toLocaleString() : null
    })));
  };

  return (
    <div>
      <Header addTodo={addTodo} input={input} setInput={setInput} editing={editing} updateTodo={updateTodo} />
      <Home todos={todos} toggleStatus={toggleStatus} toggleEdit={toggleEdit} deleteTodo={deleteTodo} />
      <About doneAll={doneAll} deleteAll={deleteAll} allCompleted={allCompleted} />
    </div>
  );
}

export default App;