import {useState, useEffect, act} from 'react';
import axios from 'axios';

export default function GetPosts(){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            setPosts(response.data);
        })
        .catch(error => alert(error));
    }, []);
    return(
        <div>
            {posts.map(post=>(
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}






