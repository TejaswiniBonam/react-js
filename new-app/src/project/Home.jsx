import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import NaviBar from './NaviBar';
import LoginForm from './LoginForm';
import GetUsers from './GetUsers';
import GetPosts from './GetPosts';
import themes from './themes';
import styles from './styles/Home.module.css'

export default function Home() {
    const [active, setActive] = useState('Home');
    const [loggedIn, setLoggedIn] = useState(null);
    const [users, setUsers] = useState([]); //state lifted up from GetUsers to here
    const [theme, setTheme] = useState('light');
    //console.log("type of users" ,typeof users);
    //console.log("current user ", loggedIn);

    useEffect(() => {
        document.body.style.backgroundColor = themes[theme].bgColor;
        document.body.style.color = themes[theme].textColor;
    }, [theme])
    // brough this fetching to home cuz we need user details in both getusers and loginform
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setUsers([...data]);
                //console.log("Data : " ,data, "Type : ", typeof data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <Header theme={themes[theme]} />
            <NaviBar
                setActive={setActive}
                loggedIn={loggedIn}
                theme={themes[theme]}
                setTheme={setTheme}
            />
            {active==='Home' && <div className={styles.home}><h1>{loggedIn?`WELCOME ${loggedIn.name}`:`PLEASE SIGN IN TO VIEW DATA`} </h1></div>}
        {active==='Users' && (
            <>
            <h1>USERS</h1>
            <GetUsers theme={themes[theme]} users={users}/>
            </>
        )}
        {active==='Posts' && (
            <>
            <h1> POSTS </h1>
            <GetPosts theme={themes[theme]}/>
            </>
        )} 
        {active==='SignIn' && (
            <LoginForm theme={themes[theme]} users={users} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        )} 
            <Footer theme={themes[theme]}/>
        </>
    );
}











