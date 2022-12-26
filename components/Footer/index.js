import styles from './Footer.module.scss'
import Link from 'next/link'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.footerText}>
                Coded by{' '}
                <Link href="#">@Andrea Bastidas</Link>
            </h2>
            
        </footer>
    )
}

export default Footer;