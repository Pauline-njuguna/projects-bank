import React, { useState } from 'react';
import CohortForm from './CohortForm';

const Cohorts = () => {
  const [cohorts, setCohorts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddCohort = (newCohort) => {
    setCohorts([...cohorts, newCohort]);
  };

  const handleDeleteCohort = (cohortIndex) => {
    const newCohorts = [...cohorts];
    newCohorts.splice(cohortIndex, 1);
    setCohorts(newCohorts);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li><a href="#">Messages</a></li>
          <li><a href="#">Departments</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Collaborations</a></li>
          <li><a href="#">Dashboard</a></li>
        </ul>
      </div>
      <div className="main">
        <h1>COHORTS</h1>
        <button onClick={handleShowForm}>Add Cohort</button>
        {showForm && <CohortForm onClose={handleCloseForm} onAdd={handleAddCohort} />}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Number of Students</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cohorts.map((cohort, index) => (
              <tr key={index}>
                <td>{cohort.name}</td>
                <td>{cohort.course}</td>
                <td>{cohort.numberOfStudents}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDeleteCohort(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cohorts;
