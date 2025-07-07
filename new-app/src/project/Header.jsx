import styles from './styles/Header.module.css'
export default function Header({theme}){
    return(
    <div className={styles.header}
        style={{
            backgroundColor: theme.secondaryColor
        }}>
        <h1>JSONPlaceholder Viewer</h1>
    </div>
    );
}