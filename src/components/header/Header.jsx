import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import header from "../../images/lawheader.png";
import "./Header.css";

const Header = ({ addTodo, input, setInput, editing, updateTodo }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      updateTodo();
    } else {
      addTodo();
    }
  };

  return (
    <div>
      <div className="header">
        <img 
          className="header"
          src={header} 
          alt=""  
        />
      </div>
      <div className="form-container">
        <Form onSubmit={handleFormSubmit} className="form-custom">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Add new todo"
              aria-label="Add new todo"
              aria-describedby="basic-addon2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="form-control"
            />
            {editing ? (
              <Button type="submit" variant="outline-secondary" id="button-addon2" className="save-button white-text"> {}
                Save
              </Button>
            ) : (
              <Button type="submit" variant="purple" id="button-addon2" className="add-button white-text"> {}
                Add
              </Button>
            )}
          </InputGroup>
        </Form>
      </div>
    </div>
  );
};

export default Header;
