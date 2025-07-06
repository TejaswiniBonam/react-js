export default function NaviBar({setActive}){
    return(
        <div>
            <nav>
                <li><a onClick={()=>setActive('Home')}>Home</a></li>
                <li><a onClick={()=>setActive('Posts')}>Posts</a></li>
                <li><a onClick={()=>setActive('Users')}>Users</a></li>
                <li><a>About Us</a></li>
                <li><a onClick={()=>setActive('SignIn')}>Sign In</a></li>
            </nav>
        </div>
    );
}