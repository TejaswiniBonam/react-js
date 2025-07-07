import {useState, useEffect, act} from 'react';
import styles from './styles/GetUsers.module.css';
export default function GetUsers({users, theme}){
    return(
        <div>
            {users.map(user=>(
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}