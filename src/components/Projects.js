import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Project(props) {
  const [projects, setProjects] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/projects") {
      fetch("http://localhost:3000/api/v1/projects")
        .then((response) => response.json())
        .then((data) => setProjects(data))
        .catch((error) => console.error(error));
    }
  }, [location.pathname]);

  if (location.pathname !== "/projects") {
    return null;
  }

  return (
    <div className="project-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <a href="#">View Project</a>
        </div>
      ))}
    </div>
  );
}

export default Project;
