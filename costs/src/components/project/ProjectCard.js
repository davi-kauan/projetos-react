
import styles from './ProjectCard.module.css'
import {Link} from 'react-router-dom'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard ({project, handleRemove}) {
    
  const {name, budget, category, id} = project

  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className={styles.ProjectCard}> 
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <p className={category ? styles[category.name.toLowerCase()] : '' } >
        <span></span> {category ? category.name : <br/>}
      </p>
      <div className={styles.ProjectCardActions} >
        <Link to="/" > 
          <BsPencil/> Editar 
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill/> Excluir
        </button>
      </div>
    </div>
  )
}

export default ProjectCard