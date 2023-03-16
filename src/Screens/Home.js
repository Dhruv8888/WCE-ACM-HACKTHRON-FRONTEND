import React from "react";
import Cookies from 'js-cookie';

export default function Home() {
  const email = Cookies.get("email");
  const account = Cookies.get("account");
  return (
    <div>
      <h3>Your account: {account} </h3>
      <h3>Your email: {email} </h3>
      <button
        style={button}
        onClick={() => {
          Cookies.remove("email");
          Cookies.remove("account");
          window.location='/SignUp'
          console.log("a");
        }}
      >
        {" "}
        
        Log out
      </button>
    </div>
  );
}
const button = {
  width: 100,
  padding: 10,
  borderRadius: 5,
  margin: 10,
  cursor: "pointer",
  fontSize: 17,
  color: "white",
  backgroundColor: "#9D27CD",
  border: "none",
};
