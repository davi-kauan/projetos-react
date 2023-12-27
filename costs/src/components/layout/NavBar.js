import ButtonLink from "../ButtonLink"
import styles from './NavBar.module.css'
import logo from '../../img/costs_logo.png'

function NavBar () {

    return (
        <div className={styles.NavBar}>
            <img src={logo} alt='logo' />
            <div className={styles.NavBarList} >
                <ButtonLink link='/'> Home </ButtonLink>
                <ButtonLink link='/projects'> Projetos </ButtonLink>
                <ButtonLink link='/company'> Empresa </ButtonLink>
                <ButtonLink link='/contact'> Contato </ButtonLink>
            </div>
        </div>
    )
}

export default NavBar