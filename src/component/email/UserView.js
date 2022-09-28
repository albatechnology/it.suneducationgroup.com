import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import $ from "jquery";
import "datatables.net";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

function UserView() {
  const [mailingListData, setMailingListData] = useState([]);
  const [publicEmailData, setPublicEmailData] = useState([]);
  const [user, setUser] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  const userData = AuthenticationService.getLocalCredential();
  const data = [];
  let { id: user_id } = useParams();

  if (user_id === undefined) user_id = userData.id;
  console.log(user_id);

  useEffect(async () => {
    // get userData

    try {
      const userRes = await axios.get(`${config.SERVER_URL}user/${user_id}`, {
        ...axiosConfig,
      });

      console.log(userRes.data);
      if (userRes.data.error_code === 0) {
        console.log(userRes.data);
        setUser(userRes.data.userData);
      }
    } catch (e) {
      console.log(e);
    }

    // get mailing list
    try {
      const mailingListRes = await axios.get(
        `${config.SERVER_URL}mailinglist/bymember`,
        {
          ...axiosConfig,
          params: { user_id },
        }
      );

      //console.log(res.data);
      if (mailingListRes.status === 200) {
        //console.log(mailingRes.data);
        setMailingListData(mailingListRes.data);
      }
    } catch (e) {
      console.log(e);
    }

    // get public email
    try {
      const publicEmailRes = await axios.get(
        `${config.SERVER_URL}publicemail/bymember`,
        {
          ...axiosConfig,
          params: { user_id },
        }
      );
      if (publicEmailRes.status === 200) {
        //console.log(res.data);
        setPublicEmailData(publicEmailRes.data);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>Personal Data</h2>
                </div>
                <div className="body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover js-mailing-list dataTable button-demo">
                      <tbody>
                        <tr key="name">
                          <td>Name</td>
                          <td>{user.fullname}</td>
                        </tr>
                        <tr key="email">
                          <td>Email</td>
                          <td>{user.email}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>Mailing List</h2>
                </div>
                <div className="body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover js-mailing-list dataTable button-demo">
                      <thead>
                        <tr>
                          <th>Email</th>
                          <th>Deskripsi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mailingListData.map((i) => (
                          <tr key={`m${i.user_id}`}>
                            <td>{i.email}</td>
                            <td>{i.deskripsi}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>Public Email</h2>
                </div>
                <div className="body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover js-mailing-list dataTable button-demo">
                      <thead>
                        <tr>
                          <th>Email</th>
                          <th>Deskripsi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {publicEmailData.map((i) => (
                          <tr key={`p${i.user_id}`}>
                            <td>{i.email}</td>
                            <td>{i.deskripsi}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default UserView;
