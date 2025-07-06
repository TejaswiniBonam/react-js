import {useState} from 'react';
export default function LoginForm({users}){
    const [creds, setCreds] = useState({usr:'', pwd:''});
    function handleFormSubmit(e){
        e.preventDefault();
        console.log(creds);
        console.log(validateCredentials(creds));
    }
    function validateCredentials(creds){
        let status = Object.values(users).some((user)=> user.username===creds.usr && user.address.zipcode===creds.pwd);
        console.log("STATUS : ", status);
        return status;
    }
    return(
        <div>
                <h2>Login Here</h2>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label>Username : </label>
                        <input
                            type='text' 
                            onChange={(e)=>setCreds({...creds, usr: e.target.value.trim()})}
                        />
                        <label>Password : </label>
                        <input
                            type='password'
                            onChange={(e)=>setCreds({...creds, pwd: e.target.value.trim()})}
                        />
                        <button type='submit'> Login </button>
                        <button>Cancel</button>
                    </div>
                </form>
        </div>
    );
}