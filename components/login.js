import { useState } from "react";
import { useNavigate} from 'react-router-dom';

function Login(){
   const navigate = useNavigate();

   const [username,setusername] = useState('');
   const [password,setpassword] = useState('');

    const inpUser = (e) => {
        setusername(e.target.value);
    }
    const inpPass = (e) => {
        setpassword(e.target.value);
    }

    const loginBtn = () => {
        if(username !== 'admin'){
            alert("Invalid username");
        }
        else if(password !== 'admin'){
            alert("Invalid Password");
        }
        else{
            navigate('/todo');         
        }
        
        setusername('');
        setpassword('');
    }

    return(
    <>
        <h1>LGOIN</h1>
       
        <input type="text" value = {username} placeholder="Enter Uer Name" onChange={(e) => inpUser(e)} />
        <input type="password" value = {password} placeholder ="Enter Password" onChange={(e) => inpPass(e)} />
        <button onClick={() => loginBtn()}>Login</button>
       
    </>
    )
}

export default Login;