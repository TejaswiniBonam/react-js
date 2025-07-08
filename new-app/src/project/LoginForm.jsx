import { useState } from 'react';
import styles from './styles/LoginForm.module.css';

export default function LoginForm({ theme, users, loggedIn, setLoggedIn }) {
    const [creds, setCreds] = useState({ usr: '', pwd: '' });
    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(creds);
        //console.log(validateCredentials(creds));
        if (validateCredentials(creds)) {
            const currentUser = users.find(user => user.username === creds.usr);
            setLoggedIn(currentUser);
            //console.log("new user set")
        }
    }
    function validateCredentials(creds) {
        let status = Object.values(users).some((user) => user.username === creds.usr && user.address.zipcode === creds.pwd);
        //users.map((user)=>console.log("HELLO", user.username, user.address.zipcode));
        //console.log(typeof users, Array.isArray(users));
        console.log("STATUS : ", status);
        return status;
    }
    function handleLogout() {
        setLoggedIn(null);
    }
    return (
        <>
            {!loggedIn && <div className={styles.LoginForm}>
                <h2>Login Here</h2>
                <div className={styles.form}>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <div className={styles.input}><label>Username : </label>
                                <input
                                    type='text'
                                    onChange={(e) => setCreds({ ...creds, usr: e.target.value.trim() })}
                                />
                            </div>
                            <div className={styles.input}>
                                <label>Password : </label>
                                <input
                                    type='password'
                                    onChange={(e) => setCreds({ ...creds, pwd: e.target.value.trim() })}
                                />
                            </div>
                            <div>
                                <button type='submit'
                                    style={{
                                        backgroundColor: theme.secondaryColor,
                                        color: theme.textColor
                                    }}
                                > Login </button>
    
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            }
            {loggedIn &&
                <div className={styles.logout}>
                    <button className={styles.logoutbtn}
                        style={{
                            backgroundColor: theme.secondaryColor,
                            color: theme.textColor
                        }}
                        onClick={handleLogout}
                    >Log Out
                    </button>
                </div>
            }
        </>

    );
}