import React, { useState } from 'react';
import './CohortsForm.css';

const CohortForm = (props) => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [numberOfStudents, setNumberOfStudents] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCohort = { name, course, numberOfStudents };
    props.onAdd(newCohort);
    props.onClose();
  };

  const handleCancel = () => {
    props.onClose();
  };

  return (
    <div>
      <h2>ADD COHORT</h2>
      <form onSubmit={handleSubmit}>
        <label>
          NAME:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          COURSE:
          <select
            value={course}
            onChange={(event) => setCourse(event.target.value)}
          >
            <option value="Full-stack Development">
              Full-stack Development
            </option>
            <option value="Data Science">Data Science</option>
            <option value="Android Development">Android Development</option>
            <option value="Cyber Security">Cyber Security</option>
          </select>
        </label>
        <br />
        <label>
          NUMBER OF STUDENTS:
          <input
            type="number"
            value={numberOfStudents}
            onChange={(event) => setNumberOfStudents(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CohortForm;
