/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import $, { param } from "jquery";
import "datatables.net";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

function PublicEmailAdminList({ state, dispatch }) {
  const [data, setData] = useState([]);
  const publicEmailId = state.publicEmailId;
  const axiosConfig = AuthenticationService.getAxiosConfig();
  //console.log(mailingListId);
  useEffect(async () => {
    const res = await axios.get(
      `${config.SERVER_URL}publicemailadmin/publicemail`,
      {
        ...axiosConfig,
        params: { publicemail_id: publicEmailId },
      }
    );
    if (res.status === 200) {
      setData(res.data);
      $(".js-mailing-list").DataTable({
        responsive: true,
      });
    }
  }, []);
  const deleteData = async (data) => {
    try {
      const res = await axios.delete(`${config.SERVER_URL}publicemailadmin`, {
        ...axiosConfig,
        params: { publicemail_id: publicEmailId, user_id: data.user_id },
      });
      if (res.status === 200) setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>Public Email Admin</h2>
                </div>
                <div className="body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover js-mailing-list dataTable button-demo">
                      <thead>
                        <tr>
                          <th>Email</th>
                          <th>Fullname</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((i) => (
                          <tr key={i.user_id}>
                            <td>{i.email}</td>
                            <td>{i.fullname}</td>
                            <td>
                              <button
                                className="btn btn-danger waves-effect "
                                onClick={() => {
                                  if (
                                    window.confirm(
                                      "Are you sure you wish to delete this item?"
                                    )
                                  )
                                    deleteData(i);
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary waves-effect"
                      onClick={() => {
                        dispatch({ type: "ADD" });
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default PublicEmailAdminList;
