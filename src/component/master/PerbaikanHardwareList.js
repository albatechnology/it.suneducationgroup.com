import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

function PerbaikanHardwareList({ state, dispatch }) {
  const [data, setData] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  useEffect(async () => {
    try {
      const res = await axios.get(
        `${config.SERVER_URL}perbaikanhardware`,
        axiosConfig
      );
      console.log("resdata", res.data);
      setData(res.data);

      $(".js-mailing-list").DataTable({
        responsive: true,
      });
    } catch (e) {
      console.log(e);
    }
  }, []);
  console.log("state", state);

  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>Perbaikan Hardware List</h2>
                </div>
                <div className="body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover js-mailing-list dataTable button-demo">
                      <thead>
                        <tr>
                          <th>Tanggal Pengajuan</th>
                          <th>Vendor</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((i) => (
                          <tr key={i.id}>
                            <td>{i.tanggal_pengajuan}</td>
                            <td>{i.nama_pt}</td>
                            <td>{state.statusMapping[i.status]}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary waves-effect "
                                onClick={() => {
                                  dispatch({
                                    type: "EDIT",
                                    id: i.id,
                                    row: i,
                                  });
                                }}
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary waves-effect "
                                onClick={() => {
                                  dispatch({ type: "VIEW", id: i.id, row: i });
                                }}
                              >
                                View
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

export default PerbaikanHardwareList;
