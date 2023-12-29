import {useState, useEffect} from 'react'
import styles from './ProjectsDashboard.module.css'
import ProjectCard from './ProjectCard'

function ProjectDashboard () {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setProjects(data)
    })
    .catch((err) => console.log(err))
  },[])

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((resp) => resp.json)
    .then(() => 
      setProjects(projects.filter((project) => project.id !== id))
    )
  }


  return (
    <div className={styles.ProjectsDashboard}>
      {
        projects.length > 0 &&
        projects.map((project) => (
          <ProjectCard
            project={project}
            handleRemove={removeProject}
          />
        ))
      }
      {
        projects.length === 0 && (
        <p>Não há projetos cadastrados!</p> )
      }
    </div>
  )
}

export default ProjectDashboard