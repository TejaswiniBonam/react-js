import {useState, useEffect, act} from 'react';

export default function GetUsers({users, setUsers}){
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        })
        .then(data => {
            setUsers(data);
        })
        .catch(error => alert(error));
    }, []);
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