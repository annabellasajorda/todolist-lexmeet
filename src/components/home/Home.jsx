import React from "react";
import "./Home.css";
import Button from 'react-bootstrap/Button';

const Home = ({ todos, toggleStatus, toggleEdit, deleteTodo }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col">Todo List</div>
            <div className="col">Status</div>
            <div className="col">Actions</div>
          </div>
        </div>
        <div className="card-body">
          {todos.map(todo => (
            <div className="row" key={todo.id}>
              <div className="col">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleStatus(todo.id)}
                  className="custom-checkbox"
                />
                <span className={todo.completed ? 'checkbox-text completed' : 'checkbox-text'}>
                  {todo.text}
                </span>
              </div>
              <div className="col">
                <div className="status-info">
                  <p><strong>Created:</strong> {todo.createdAt}</p>
                  <p><strong>Completed:</strong> {todo.completed ? todo.completedAt : 'Not completed'}</p>
                </div>
              </div>
              <div className="col">
                <div>
                  <Button className="edit-btn" onClick={() => toggleEdit(todo.id)}>Edit</Button>
                  <Button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
