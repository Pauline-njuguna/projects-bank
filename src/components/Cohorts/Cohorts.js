<<<<<<< HEAD:src/components/Cohorts/Cohorts.js
import React, { useState } from 'react';
import CohortForm from '../CohortForm/CohortForm';
import './Cohort.css';
=======
import React, { useState } from "react";
import CohortForm from "./CohortForm";
import "./Cohort.css";
>>>>>>> c4ebd70 (Creates a clients pathway both for the student and andmin):src/components/Cohorts.js

const Cohorts = () => {
  const [cohorts, setCohorts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedCohortIndex, setSelectedCohortIndex] = useState(-1);

  const handleAddCohort = (newCohort) => {
    setCohorts([...cohorts, newCohort]);
    setShowForm(false);
  };

  const handleDeleteCohort = (cohortIndex) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this cohort?"
    );
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
    if (action === "Delete") {
      handleDeleteCohort(cohortIndex);
    } else if (action === "Update") {
      setSelectedCohortIndex(cohortIndex);
      setShowForm(true);
    }
  };

  const handleUpdateCohort = (updatedCohort) => {
    const updatedCohorts = [...cohorts];
    updatedCohorts[selectedCohortIndex] = updatedCohort;
    setCohorts(updatedCohorts);
    setSelectedCohortIndex(-1);
    setShowForm(false);
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
              onUpdate={handleUpdateCohort}
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
<<<<<<< HEAD:src/components/Cohorts/Cohorts.js
           
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
=======
          {cohorts.map((cohort, index) => (
            <tr key={index}>
              <td>{cohort.name}</td>
              <td>{cohort.course}</td>
              <td>{cohort.numberOfStudents}</td>
              <td>
                <select
                  value=""
                  onChange={(e) => handleAction(e.target.value, index)}
                >
                  <option disabled value="">
                    Select an action
                  </option>
                  <option value="Update">Update</option>
                  <option value="Delete">Delete</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
>>>>>>> c4ebd70 (Creates a clients pathway both for the student and andmin):src/components/Cohorts.js
    </div>
  );
};

export default Cohorts;