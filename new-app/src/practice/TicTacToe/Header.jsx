import styles from './css_files/HeaderFooter.module.css'    
export default function Header(){
    return(
        <header className={styles.header}>
            <nav className={styles.navBar}>

                <div className={styles.head1}>
                    <a href="#home" className={[styles.HeadText, styles.navItem].join(' ')}>TicTacToe</a>
                </div>
                <div className={styles.head2}>    
                <a href="#Score" className={styles.navItem}>Score</a>
                <a href="#contact" className={styles.navItem}>Contact</a>
                </div>
            </nav>
        </header>
    );
}

