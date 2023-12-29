import {Link} from 'react-router-dom'

import styles from './Projects.module.css'
import ProjectsDashboard from '../project/ProjectsDashboard'

function Projects () {

  return (
    <div className={styles.Projects} >
      <div className={styles.ProjectsHead}>
        <h1>Meus projetos</h1>
            <Link to='/newproject'> criar projeto </Link>
      </div>
      <ProjectsDashboard/>
    </div>
  )
}

export default Projects