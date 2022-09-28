import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import AuthenticationService from "./../../logic/AuthenticationService";

const Authentication = (props) => {
  const [pageState, setPageState] = useState(0);

  const search = props.location.search;
  const params = new URLSearchParams(search);
  const login_token = params.get("login_token");

  //console.log("authen run", login_token);
  useEffect(async () => {
    const token = AuthenticationService.getToken();
    console.log("token", token);
    if (token === "") {
      //AuthenticationService.clearLocalCredential();
      const userData = await AuthenticationService.authentication(login_token);
      if (userData) {
        const localCre = AuthenticationService.getToken();
        console.log("Local Cre", localCre);
        console.log("User data", userData);

        //setPageState(1);
      }
    } else {
      //setPageState(1);
    }
  }, []);

  return (
    <div>{pageState === 0 ? <h1>Login....</h1> : <Redirect to="/" />}</div>
  );
};

export default Authentication;
