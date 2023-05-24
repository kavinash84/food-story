/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../src/Login.css";
import { useEffect } from "react";

function Login() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const history = useNavigate();
   useEffect(() => {
      if (localStorage.getItem("user-info")) {
         history.push("/");
      }
   }, []);
   async function loginBtn() {
      let item = { username, password };

      let result = await fetch(
         "https://dev.foodstories.store/rest/V1/integration/customer/token",
         {
            method: "POST",
            // mode: "no-cors",

            headers: {
               "Content-Type": "application/json",
               // "Access-Control-Allow-Headers": "*",
            },
            body: JSON.stringify(item),
         }
      );
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      history.push("/");
   }

   return (
      <div>
         <input
            type='text'
            placeholder='enter name'
            onChange={(e) => setUsername(e.target.value)}
         />
         <input
            type='password'
            placeholder='enter name'
            onChange={(e) => setPassword(e.target.value)}
         />
         <button onClick={loginBtn}>submit</button>
      </div>
   );
}

export default Login;
