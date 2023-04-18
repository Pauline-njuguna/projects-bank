import React, { useState } from 'react';
import CohortForm from '../CohortForm/CohortForm';
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
            <th>ACTION</th>
          </tr>
        </thead>
        </table>
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
    </div>
  );
};

export default Cohorts;
