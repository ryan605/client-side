import React,{useState} from "react"
// import {useNavigate} from "react-router-dom"

function Signup(){

    // const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const res = await fetch('http://localhost:4055/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            });
            const data = await res.json();
            // localStorage.setItem('token', data.token);
            // navigate('/todo');
        } catch (err) {
            console.log(err.message);
        }
    }



  return(
    <form action="action_page.php"method="post"onSubmit={handleSubmit}>
        <div className="imgcontainer">
            <img src="" alt="" className="avartar"></img>
        </div>
        <div className="container">
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Email" name="uname" required value={email} onChange={e => setEmail(e.target.value)}></input>
            <label for="uname"required><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required value={username} onChange={e => setUsername(e.target.value)}></input>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required value={password} onChange={e => setPassword(e.target.value)}></input>
            <button type="submit">SIGNUP</button>
        <label>
            <input type="checkbox" checked="checked" name="remember"/>Remember me
        </label>
        </div>
        <div className="container">
        <button type="button" className="cancelbtn">Cancel</button>
        </div>
    </form>

  )
}
export default Signup