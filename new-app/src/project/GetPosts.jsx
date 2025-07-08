import { useState, useEffect, act } from 'react';
import axios from 'axios';
import styles from './styles/GetPosts.module.css'

export default function GetPosts({ theme }) {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('all');
    const userIds = ['all', ...new Set(posts.map(post=>post.userId))];
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
                setFilteredPosts(response.data);
            })
            .catch(error => alert(error));
    }, []);



    function handleDropdown(userId){
        setSelectedUserId(userId);
        if(userId==='all'){
            setFilteredPosts(posts);
        }else{
            setFilteredPosts(posts.filter(post=>post.userId===Number(userId)));
        }
    }
    return (
        <div>
            <select className={`${styles.dropdown} ${styles[theme.name]}`}
                    onChange={(e)=>handleDropdown(e.target.value)}
            >
                    {userIds.map(userId=>(
                        <option key={userId} value={userId}>
                            {userId ==='all' ? 'ALL Users' : `User ${userId}` }
                        </option>
                    ))}
            </select>
            <div className={styles.posts}>
                {filteredPosts.map(post => (
                    <div className={`${styles.postCard} ${styles[theme.name]}`} key={post.id}>
                        <div>
                            <h3>By User {post.userId}</h3>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}






