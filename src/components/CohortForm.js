import React, { useState } from 'react';

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
      <h2>Add Cohort</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Course:
          <input type="text" value={course} onChange={(event) => setCourse(event.target.value)} />
        </label>
        <br />
        <label>
          Number of Students:
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
