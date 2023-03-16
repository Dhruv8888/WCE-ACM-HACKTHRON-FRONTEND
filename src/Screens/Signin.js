import * as React from "react";
import { loadBlockchainData, loadWeb3 } from "../Web3helpers";
import { useNavigate } from "react-router-dom";
import img1 from '../Images/Car.jpeg'
import '../Screens/Signini.css'
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
export default function SignIn() {
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

  const login = async () => {
    if (!email || !password) {
      alert("please fill all details");

      return;
    }

    try {
      const res = await auth.methods.usersList(email).call();

      if (res.password === password) {
        localStorage.setItem("email", email);
        localStorage.setItem("account", accounts);
        console.log("Success");
        Cookies.set('email', email);
        Cookies.set('account', accounts);
        window.location='/Home'
      } else {
        alert("wrong user credintinals or please signup");
      }
    } catch (error) {
      alert(error.message);
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
          <div className="login">
          
          <form>
  <div className="form-group">
    <input  onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control usrnm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
     <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control usrnm" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="submission">
      <button type="submit" className="btn btn-primary" onClick
      ={login}>Submit</button>
  </div>
  Already have a account? <Link className="Link-color" to='/SignUp'>Sign Up</Link>
</form>
          </div>
        </div>
        </div>
        </div>
     </div>
  
    </>
  );
}


