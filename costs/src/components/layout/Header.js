import {Link} from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../img/costs_logo.png'

function Header () {

    return (
        <header>
            <img src={logo} alt='logo' />
            <div className={styles.NavList} >
            {
                [['/', 'Home'], ['/projects', 'Projetos'], ['/company', 'Empresa'], ['contact', 'Contato']]
                .map(([link, name]) => (
                    <Link to={link} > {name} </Link>
                ))
            }
            </div>
        </header>
    )
}

export default Header