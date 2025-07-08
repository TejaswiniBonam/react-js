import styles from './styles/Footer.module.css'
export default function Footer({ theme }) {
    return (
        <div className={styles.footer}
            style={{
                backgroundColor: theme.secondaryColor
            }}>
            <div className="footer-content">
                <div className="footer-links">
                    <a>Contact : xxxxxxxxx@gmail.com</a>
                </div>
                <div className="copyright">
                    &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                </div>
            </div>
        </div>
    );
}