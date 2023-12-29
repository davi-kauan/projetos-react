import {Link} from 'react-router-dom'
import styles from 'Projects.module.css'

function Projects () {

    return (
        <div className={styles.Projects} >
            <h1>Meus projetos</h1>
            <Link to='/newproject'> criar projeto </Link>
        </div>
    )
}

export default Projects