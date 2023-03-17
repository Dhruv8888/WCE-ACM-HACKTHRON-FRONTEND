import * as React from "react";
import { loadBlockchainData, loadWeb3 } from "../Web3helpers";
import { useNavigate } from "react-router-dom";
import img1 from '../Images/evimage.jpeg'
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
        window.location='/Stationmap'
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
    <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
         <img src={img1}  className="img-fluid rounded shadow-lg white rounded" alt="Sample image"></img>
        {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/> */}
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>  
        

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 display-6">Sign In</p>
          </div>
               
          <div className="form-outline mb-4">
            <input onChange={(e)=>setEmail(e.target.value)} type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label className="form-label" htmlFor="form3Example3">Email address</label>
          </div>

        
          <div className="form-outline mb-3">
            <input  onChange={(e)=>setPassword(e.target.value)} type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" />
            <label className="form-label" htmlFor="form3Example4">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>
  {/* padding-left: 2.5rem; padding-right: 2.5rem; */}
          <div className="text-center text-lg-start mt-4 pt-2">
            <button onClick={login} type="submit" className="btn btn-primary btn-lg"
              style={{paddingLeft:"2.5rem",paddingRight:'2.5rem'}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/SignUp"
                className="link-danger">Register</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

    <div className="text-white mb-3 mb-md-0">
      Copyright © 2023. All rights reserved.
    </div>
  

    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google"></i>
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
    
  </div>
</section>
    </>
  );
}