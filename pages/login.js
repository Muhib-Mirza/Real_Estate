import axios from "axios";
import { useState, useRef } from "react";

const Login = () => {
    const [user,setUser] = useState({
        uname:"",
        email:"",
        pass:"",
    })
    const [image,setImage] = useState(null);
    const handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({...user, [name]:value});
    }
    const handleImage = (e)=>{
        setImage(e.target.files[0]);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("userimage",image);
        formdata.append("uname",user.uname);
        formdata.append("email",user.email);
        formdata.append("pass",user.pass);
        axios.post("http://localhost:4000/register",formdata).then((result)=>{
            console.log(result.data);
        })
    }
    
    return ( 
        <>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Enter UserName" name="uname" value={user.uname } onChange={ handleChange } required />
            <input type="email" placeholder="Enter Email" name="email" value={user.email} onChange={ handleChange } required />
            <input type="password" name="pass" value={user.pass} placeholder="Enter Pass" onChange={ handleChange } required />
            <input type="file" onChange={handleImage} />     
            <button type="submit">Submit</button>
        </form>
        </>
     );
}
 
export default Login;