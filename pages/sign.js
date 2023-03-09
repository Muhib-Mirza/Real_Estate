import axios from "axios";
import { useState } from "react";

const Sign = () => {
    const [user,setUser] = useState({
        email:"",
        pass:"",
    })
    const handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({...user, [name]:value});
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const res = await axios.post("http://localhost:4000/login",user);
        console.log(res);
    }
    return ( 
        <>
        <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={user.email} onChange={handleChange} />
        <input type="password" name="pass" value={user.pass} onChange={handleChange} />
        <button type="submit">Submit</button>
        </form>
        </>
     );
}
 
export default Sign;