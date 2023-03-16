import * as React from "react";
import { loadBlockchainData, loadWeb3 } from "../Web3helpers";
import img1 from '../Images/Car.jpeg'
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import '../Screens/SignUp.css'
export default function SignUp() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const [accounts, setAccounts] = React.useState(null);
  const [auth, setAuth] = React.useState(null);

  const loadAccounts = async () => {
    let { auth, accounts } = await loadBlockchainData();

    setAccounts(accounts);
    setAuth(auth);
  };

  const signUp = async () => {
    if (!username || !email || !password) {
      alert("please fill all details");
      return;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      alert("please enter valid email address");
      return;
    }
    try {
      await auth.methods
        .createUser(username, email, password)
        .send({ from: accounts });
      Cookies.set('username', username);
      Cookies.set('email', email);
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      const detail={
        username:username,
        email:email,
        password:password
      }
      navigate("/");
      const response = await fetch("http://127.0.0.1:8000/register/",{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        // body:detail
        body:JSON.stringify(detail)
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      } 
      const res = await response.json();
      window.location.reload();
    } catch (e) {
      console.log(e.message);
    }
  };
  React.useEffect(() => {
    loadWeb3();
  }, []);

  React.useEffect(() => {
    loadAccounts();
  }, []);

  return (
   <>
    <div className="whole-component">

<div className="container">
 <div className="row">
   <div className="col-sm">
     <img src={img1}></img>
   </div>


   <div className="col-sm">
     <div className="Signup">
<div className="form-group">
  <div className="first-field">
<input  onChange={(e)=>setUsername(e.target.value)}  className="form-control usrnm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
</div>
<input  onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control usrnm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
</div>
<div className="form-group">
<input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control usrnm" id="exampleInputPassword1" placeholder="Password"/>
</div>
<div className="submission">
  <button type="submit" className="btn btn-primary" onClick={signUp}>Submit</button>
</div>
  Already have a account? <Link className="Link-color" to='/'>Sign Up</Link>
     </div>
     </div>
   </div>
   </div>
   </div>
    </>
  );
}
