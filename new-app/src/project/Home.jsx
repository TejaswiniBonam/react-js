import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import NaviBar from './NaviBar';
import LoginForm from './LoginForm';
import GetUsers from './GetUsers';
import GetPosts from './GetPosts';

export default function Home(){
    const [active, setActive] = useState('Home');
    const [isLoggedIn, setIsLoggedIn] = useState('false');
    const [users, setUsers] = useState([]); //state lifted up from GetUsers to here
    return(
        <>
        <Header />
        <NaviBar 
            setActive={setActive}
            isLoggedIn = {isLoggedIn}
        />
        {active==='Home' && <h1>WELCOME</h1>}
        {active==='Users' && (
            <>
            <h1>USERS</h1>
            <GetUsers users={users} setUsers={setUsers}/>
            </>
        )}
        {active==='Posts' && (
            <>
            <h1> POSTS </h1>
            <GetPosts />
            </>
        )} 
        {active==='SignIn' && (
            <LoginForm users={users}/>
        )}

        <Footer />
        </>
    );
}











