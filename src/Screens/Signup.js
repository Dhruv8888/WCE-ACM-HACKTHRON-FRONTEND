import * as React from "react";
import { loadBlockchainData, loadWeb3 } from "../Web3helpers";
// import img1 from '../Images/Car.jpeg'
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
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
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
      navigate("/");
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
   <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        {/*  <img src={img1} className="img-fluid" alt="Sample image"></img> */}
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>    
          <div className="form-outline mb-4">
            <input onChange={(e)=>setUsername(e.target.value)}  id="form3Example2" className="form-control form-control-lg"
              placeholder="Enter a Username" />
            <label className="form-label" htmlFor="form3Example2">User Name</label>
          </div>
          

          <div className="form-outline mb-3">
            <input onChange={(e)=>setEmail(e.target.value)} type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a Email" />
            <label className="form-label" htmlFor="form3Example3">Email address</label>
          </div>

        
          <div className="form-outline mb-2">
            <input  onChange={(e)=>setPassword(e.target.value)} type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" />
            <label className="form-label" htmlFor="form3Example4">Password</label>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            
          </div>
  {/* padding-left: 2.5rem; padding-right: 2.5rem; */}
          <div className="text-center text-lg-start mt-4 pt-2">
            <button onClick={signUp} type="submit" className="btn btn-primary btn-lg"
              style={{paddingLeft:"2.5rem",paddingRight:'2.5rem'}}>Submit</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Already Resgister? <Link to="/"
                className="link-danger">Signin</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

    <div className="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
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