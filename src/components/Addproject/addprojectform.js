import React, { useState } from "react";
import "./project.css"; // Import CSS file for styling

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");
  const [members, setMembers] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit project data to backend or perform desired action
    // Example implementation:
    const projectData = {
      projectName,
      description,
      owner,
      members,
      githubLink,
      course,
    };
    console.log("Project Data:", projectData);
    // Clear form inputs
    setProjectName("");
    setDescription("");
    setOwner("");
    setMembers("");
    setGithubLink("");
    setCourse("");
  };

  return (
    <div className="project-form-container">
      <div className="sidebar">
        <h3>Navigation</h3>
        <ul>
          <li>
            <a href="/messages">Messages</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/cohorts">Cohorts</a>
          </li>
        </ul>
      </div>
      <div className="form-container">
        <h2>Add New Project</h2>
        <form onSubmit={handleSubmit} className="project-form">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <label htmlFor="owner">Owner</label>
          <input
            type="text"
            id="owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            required
          />

          <label htmlFor="members">Members</label>
          <input
            type="text"
            id="members"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
            required
          />

          <label htmlFor="githubLink">GitHub Link</label>
          <input
            type="text"
            id="githubLink"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
          />

          <label htmlFor="course">Course</label>
          <input
            type="text"
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
