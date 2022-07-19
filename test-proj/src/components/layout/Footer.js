import {FaFacebookSquare, FaGithubSquare, FaHeart, FaInstagramSquare} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return(
        <footer className={styles.container}>
            Made by MII with luv   <FaHeart />
            
            <ul className={styles.socialList}>
                <li className={styles.item}><FaFacebookSquare /></li>
                <li className={styles.item}><FaGithubSquare /></li>
                <li className={styles.item}><FaInstagramSquare /></li>
            </ul>
            
            
        </footer>
    )
}

export default Footer;