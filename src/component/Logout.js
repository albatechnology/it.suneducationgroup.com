import React from "react";
import AuthenticationServis from "../logic/AuthenticationService";

function Logout() {
  AuthenticationServis.clearLocalCredential();
  return (
    <div>
      <h2>Logout</h2>
    </div>
  );
}

export default Logout;
