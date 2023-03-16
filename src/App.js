import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Screens/Signin";
import SignUp from "./Screens/Signup";
import Home from "./Screens/Home";
import Mappage2 from "./Mappage2";
import Header from "./Screens/Header";
import Stationmap from "./Screens/Stationmap";
import Wallet from "./Screens/Wallet";
import Slots from "./Screens/Slots";
import Success from "./Screens/Success";


function App() {
  const email = localStorage.getItem("email");
 
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Stationmap" element={<Stationmap />} />
          <Route path="/Mappage2" element={<Mappage2/>} />
          <Route path="/Wallet" element={<Wallet/>} />
          <Route path="/Slots" element={<Slots/>} />
          <Route path="/Success" element={<Success/>} />

          <Route
            path="/Home"
            element={email ? <Home /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
