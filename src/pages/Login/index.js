import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./style.scss";

const Login = () => {

  const authorised = {
    name1: "pass1",
    name2: "pass2",
    name3: "pass3",
    name4: "pass4",
    name5: "pass5",
  }

  const nameArr = Object.keys(authorised);
  const passArr = Object.values(authorised);

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  let success = 0;

  const checkMe = () => {
    for (let i = 0; i < nameArr.length; i++) {
      if ((name === nameArr[i]) && (pass === passArr[i])) {
        success = success + 1;
        console.log(success)
      } else {
        console.log(success)
      }
    }
    if (success > 0) {
      alert("Hello, you are logged in")
    } else {alert("Wrong login or password")}
}

  const handleName = (event) => {
    setName(event.target.value);
    console.log(name)
  }
  const handlePass = (event) => {
    setPass(event.target.value);
    console.log(pass)
  }

  return (
    <div className="container">
      <p>your login:</p>
      <input onChange={handleName}></input>
      <p>your pass:</p>
      <input onChange={handlePass}></input>
      <div>
        <button type="submit" onClick={checkMe}>log in</button>
      </div>
    </div>

  )
};

export default Login;
