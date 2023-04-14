import React, { useState } from "react";
import "./cohortform.css"
const CohortForm = () => {
  const [cohortName, setCohortName] = useState("");
  const [course, setCourse] = useState("");
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      cohortName,
      course,
      students,
    };

    try {
      // Send POST request to API endpoint
      const response = await fetch("http://localhost:3000/form", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const responseData = await response.json();
        setSubmittedData(responseData); // Set submitted data to state
      } else {
        console.error("Failed to submit form");
      }

    } catch (error) {
      console.error("Failed to submit form", error);
    }
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (studentName && studentEmail) {
      // Create a new student object with name and email
      const newStudent = {
        name: studentName,
        email: studentEmail,
      };

      // Add new student to the students array
      setStudents([...students, newStudent]);

      // Clear the student name and email fields
      setStudentName("");
      setStudentEmail("");
    } 
  };

  return (
    <div className="main-container">
      <div className="header-container">
        {" "}
        <h1>Add New Cohort</h1>
        <form onSubmit={handleFormSubmit}>
          <label>
            <input
              placeholder="Cohort Name"
              type="text"
              value={cohortName}
              onChange={(e) => setCohortName(e.target.value)}
            />
          </label>
          <br />
          <label>
            <select value={course} onChange={(e) => setCourse(e.target.value)}>
              <option value="">Select a course</option>
              <option value="Android Development">Android Development</option>
              <option value="Full-Stack Development">
                Full-Stack Development
              </option>
              <option value="Data Science">Data Science</option>
              <option value="Cybersecurity">Cybersecurity</option>
            </select>
          </label>
          <br />
          <label>
            Students:
            <ul>
              {students.map((student, index) => (
                <li key={index}>
                  {student.name} ({student.email})
                </li>
              ))}
            </ul>
            <input
              type="text"
              value={studentName}
              placeholder="Name"
              onChange={(e) => setStudentName(e.target.value)}
            />
            <input
              type="email"
              value={studentEmail}
              placeholder="Email"
              onChange={(e) => setStudentEmail(e.target.value)}
            />
            <button onClick={handleAddStudent}>Add Student</button>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {submittedData && (
          <div>
            <h2>Submitted Data</h2>
            <p>Cohort Name: {submittedData.cohortName}</p>
            <p>Course: {submittedData.course}</p>
            <p>Students: {submittedData.students.join(", ")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CohortForm;
