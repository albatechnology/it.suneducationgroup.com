import React from "react";
import AuthenticationService from "./../../logic/AuthenticationService";

function DashBoard() {
  const userData = AuthenticationService.getLocalCredential();

  if (userData.userName == "") {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>DASHBOARD</h2>
          </div>

          <div className="row clearfix">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <h3>id : {userData.user_id}</h3>
              <h3>username : {userData.userName}</h3>
              <h3>token : {userData.token}</h3>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default DashBoard;
