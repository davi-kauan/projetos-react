import ButtonLink from "../ButtonLink"
import savings from '../../img/savings.svg'
import styles from './Home.module.css'

function Home () {

    return (
        <div className={styles.Home}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <h3>Comece a gerenciar seus projetos agora mesmo!</h3>
            <ButtonLink className={styles.ButtonLink} link='/newproject' > Criar um projeto </ButtonLink>
            <img src={savings} alt='ilustracao' />
        </div>
    )
}

export default Home