import React, { useState } from 'react';
import CohortForm from './CohortForm';
import './Cohort.css';

const Cohorts = () => {
  const [cohorts, setCohorts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedCohortIndex, setSelectedCohortIndex] = useState(-1);

  const handleAddCohort = (newCohort) => {
    setCohorts([...cohorts, newCohort]);
    setShowForm(false);
  };

  const handleDeleteCohort = (cohortIndex) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this cohort?');
    if (shouldDelete) {
      const newCohorts = [...cohorts];
      newCohorts.splice(cohortIndex, 1);
      setCohorts(newCohorts);
    }
  };

  const handleShowForm = () => {
    setSelectedCohortIndex(-1);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleAction = (action, cohortIndex) => {
    if (action === 'Delete') {
      handleDeleteCohort(cohortIndex);
    } else if (action === 'Update') {
      setSelectedCohortIndex(cohortIndex);
      setShowForm(true);
    }
  };

  return (
<<<<<<< HEAD
    <div>
      <h1>COHORTS</h1>
      <button onClick={handleShowForm}>ADD COHORT</button>
      {showForm && (
        <div className="popup">
          <div className="popup-inner">
            <CohortForm
              onClose={handleCloseForm}
              onAdd={handleAddCohort}
              onUpdate={setCohorts}
              selectedCohort={cohorts[selectedCohortIndex]}
            />
          </div>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>COURSE</th>
            <th>NUMBER OF STUDENT</th>
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
                <select onChange={(e) => handleAction(e.target.value, index)}>
                  <option disabled selected>Select an action</option>
                  <option value="Update">Update</option>
                  <option value="Delete">Delete</option>
                </select>
              </td>
=======
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
>>>>>>> 60a1bbbcfbb3d3dd61cafb815bd64e10ad89b5e9
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
