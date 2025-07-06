import {useState} from 'react';
import axios from 'axios';

export default function Home(){
    getUsers();
    return(
        <>
        <Header />
        <NaviBar />
        <Footer />
        </>
    );
}


function NaviBar(){
    return(
        <div>
            <nav>
                <li><a>Home</a></li>
                <li><a>Posts</a></li>
                <li><a>About Us</a></li>
            </nav>
        </div>
    );
}


function Header(){
    return(
    <div>
        <h1>JSONPlaceholder Viewer</h1>
    </div>
    );
}

function Footer(){
    return(
        <div>
            <p>This is footer</p>
        </div>
    );
}

function Posts(){
    const [posts, setPosts] = useState([]);

}

async function getPosts(){
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const postList = response.data;
        //console.log(userList.data);
    }
    catch(Error){
        alert(Error);
    }

}
async function getUsers(){
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        //console.log(userList.data);
        const userList = response.data;
    }
    catch(Error){
        alert(Error);
    }

}

