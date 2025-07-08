import { useState, useEffect, act } from 'react';
import styles from './styles/GetUsers.module.css';
export default function GetUsers({ users, theme }) {
    return (
        <div
            className={styles.container}
            style={{
                backgroundColor: theme.bgColor,
                color: theme.textColor,
            }}
        >
            {users.map(user => (
                <div key={user.id}
                    className={styles.userCard}
                    style={{
                        backgroundColor: theme.secondaryColor,
                        color: theme.textColor,
                    }}
                >
                    <h3 className={styles.userName}>{`User ${user.id} - ${user.name}`}</h3>
                    <p className={styles.userEmail}>{user.email}</p>
                </div>
            ))}
        </div>
    );
}