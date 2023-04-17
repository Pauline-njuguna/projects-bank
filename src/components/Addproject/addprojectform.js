import React, { useState } from "react";
import "./project.css"; // Import CSS file for styling

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");
<<<<<<< HEAD
  const [members, setMembers] = useState([]);
  const [githubLink, setGithubLink] = useState("");
  const [course, setCourse] = useState("");

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const addMember = () => {
    if (members.length < 5) {
      setMembers([...members, { name: "", email: "" }]);
    }
  };

  const removeMember = (index) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };

=======
  const [members, setMembers] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [course, setCourse] = useState("");

>>>>>>> 7edec6e (Adds the project form to the ad project functionality)
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
<<<<<<< HEAD
    setMembers([]);
=======
    setMembers("");
>>>>>>> 7edec6e (Adds the project form to the ad project functionality)
    setGithubLink("");
    setCourse("");
  };

  return (
    <div className="project-form-container">
<<<<<<< HEAD
=======
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
>>>>>>> 7edec6e (Adds the project form to the ad project functionality)
      <div className="form-container">
        <h2>Add New Project</h2>
        <form onSubmit={handleSubmit} className="project-form">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
<<<<<<< HEAD
            placeholder="Project Name"
=======
>>>>>>> 7edec6e (Adds the project form to the ad project functionality)
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
<<<<<<< HEAD
            placeholder="Description"
=======
>>>>>>> 7edec6e (Adds the project form to the ad project functionality)
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <label htmlFor="owner">Owner</label>
          <input
            type="text"
            id="owner"
<<<<<<< HEAD
            placeholder="Owner"
=======
>>>>>>> 7edec6e (Adds the project form to the ad project functionality)
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            required
          />

          <label htmlFor="members">Members</label>
<<<<<<< HEAD
          {members.map((member, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Name"
                value={member.name}
                onChange={(e) =>
                  handleMemberChange(index, "name", e.target.value)
                }
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={member.email}
                onChange={(e) =>
                  handleMemberChange(index, "email", e.target.value)
                }
                required
              />
              <button type="button" onClick={() => removeMember(index)}>
                Remove
              </button>
            </div>
          ))}
          {members.length < 5 && (
            <button type="button" onClick={addMember}>
              Add Member
            </button>
          )}
=======
          <input
            type="text"
            id="members"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
            required
          />
>>>>>>> 7edec6e (Adds the project form to the ad project functionality)

          <label htmlFor="githubLink">GitHub Link</label>
          <input
            type="text"
            id="githubLink"
<<<<<<< HEAD
            placeholder="githubLink"
=======
>>>>>>> 7edec6e (Adds the project form to the ad project functionality)
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
          />

<<<<<<< HEAD
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
=======
          <label htmlFor="course">Course</label>
          <input
            type="text"
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
>>>>>>> 7edec6e (Adds the project form to the ad project functionality)

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
