// About.jsx
import React from "react";
import "./About.css";
import Button from 'react-bootstrap/Button';

const About = ({ doneAll, deleteAll, allCompleted }) => {
  return (
    <div className="about-buttons">
      <Button className="done-all-btn" variant="primary" onClick={doneAll}>
        {allCompleted ? 'Unmark All Done' : 'Mark All Done'}
      </Button>{' '}
      <Button className="delete-all-btn" variant="danger" onClick={deleteAll}>
        Delete All
      </Button>{' '}
    </div>
  );
}

export default About;
