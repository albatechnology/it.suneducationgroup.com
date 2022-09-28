import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

function MailingListList({ state, dispatch }) {
  const [mailingListData, setMailingListData] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  let mailingListObject = null;

  useEffect(() => {
    // Update the document title using the browser API

    axios.get(`${config.SERVER_URL}mailinglist`, axiosConfig).then((res) => {
      //console.log(res.data);
      if (res.status === 200) {
        setMailingListData(res.data);
        $(".js-mailing-list").DataTable({
          responsive: true,
        });
      }
    });
  }, []);

  const deleteData = (data) => {
    console.log(data);
    axios
      .delete(`${config.SERVER_URL}mailinglist/${data.id}`, axiosConfig)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) setMailingListData(res.data);
      });
  };

  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
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
                          <th>Mailing List</th>
                          <th>Deskipsi</th>
                          <th>Member</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mailingListData.map((i) => (
                          <tr key={i.id}>
                            <td>{i.email}</td>
                            <td>{i.deskripsi}</td>
                            <td>{i.email_count}</td>
                            <td>
                              <button
                                className="btn btn-primary waves-effect "
                                onClick={() => {
                                  dispatch({ type: "EDIT", id: i.id, row: i });
                                }}
                              >
                                Edit
                              </button>
                              <a
                                href={`/mailinglistmember/${i.id}`}
                                className="btn btn-primary waves-effect "
                              >
                                Member
                              </a>
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

export default MailingListList;
