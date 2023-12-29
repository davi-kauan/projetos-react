import {Link} from 'react-router-dom'
import savings from '../../img/savings.svg'
import styles from './Home.module.css'

function Home () {

    return (
        <div className={styles.Home}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <h3>Comece a gerenciar seus projetos agora mesmo!</h3>
            <Link className={styles.ButtonLink} to='/newproject' > Criar um projeto </Link>
            <img src={savings} alt='ilustracao' />
        </div>
    )
}

export default Home