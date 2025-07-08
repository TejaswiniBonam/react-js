import styles from './styles/NaviBar.module.css'


export default function NaviBar({setActive, loggedIn, theme, setTheme}){

    function handleTheme(){
        if(theme.name === 'Light'){
            console.log("case 1");
            setTheme('dark');
        } else if(theme.name === 'Dark'){
            console.log("case 2");
            setTheme('blue');
        } else if(theme.name==='Ocean'){
            console.log("case 3");
            setTheme('light');
        }
    }

    return(
        <div>
            <nav 
                className = {styles.navBar}
                style={{
                    backgroundColor: theme.secondaryColor,
                    color: theme.textColor
                }}
            >
                <a className={`${styles.navItem} ${styles[theme.name]} `}  
                    onClick={()=>setActive('Home')}>
                        Home
                </a>
                <a className={`${styles.navItem} ${styles[theme.name]} ${!loggedIn ? styles.disabled : ``}`}  
                    onClick={()=>setActive('Posts')}>
                        Posts
                </a>
                <a className={`${styles.navItem} ${styles[theme.name]} ${!loggedIn ? styles.disabled : ``}`}   
                    onClick={()=>setActive('Users')}>
                        Users
                </a>
                <a className={`${styles.navItem} ${styles[theme.name]}`}
                    href='https://jsonplaceholder.typicode.com/'
                    target = '_blank' 
                 >
                        About Us
                </a>
                <a className={`${styles.navItem} ${styles[theme.name]}`}  
                    onClick={()=>setActive('SignIn')}>
                        {!loggedIn ? `Sign In` : `${loggedIn.username} ( ${loggedIn.id} )`} 
                </a>
                <button className={[styles.toggleMode, styles.navItem].join(' ')} 
                    onClick={handleTheme}>
                        {theme.name === 'Light' ? '🌙' : theme.name === 'Dark' ? '🌊' : '☀️'}
                </button>
            </nav>
        </div>
    );

}