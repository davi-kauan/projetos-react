import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'


function Footer () {

  return (
    <footer>
      <div className={styles.social_list}>
        <FaFacebook className={styles.social_list_item}/>
        <FaInstagram className={styles.social_list_item} />
        <FaLinkedin className={styles.social_list_item} />
      </div>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2021
      </p>
    </footer>
  )
}

export default Footer