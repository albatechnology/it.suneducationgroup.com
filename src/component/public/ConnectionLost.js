import React from "react";

function ConnectionLost({ user, dbConnection }) {
  console.log(user);
  return (
    <div>
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>Error</h2>
          </div>

          <div className="row clearfix">
            {/* <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              
              {!dbConnection ? <h3>Connection to DB Lost</h3> : null}
              {user == null ? <h3>Login Expired</h3> : null}
            </div>
           */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              {user.id === undefined ? <h3>Login Expired</h3> : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConnectionLost;
