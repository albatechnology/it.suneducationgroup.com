import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

function TicketList({ state, dispatch }) {
  const [data, setData] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  console.log("ticket list state", state);
  useEffect(async () => {
    // Update the document title using the browser API
    //console.log(state);
    if (state.userState === "ADMIN") {
      try {
        const res = await axios.get(
          `${config.SERVER_URL}ticket/admin`,
          axiosConfig
        );
        //console.log(res.data);
        if (res.status === 200) {
          console.log(res.data);
          setData(res.data);

          $(".js-mailing-list").DataTable({
            responsive: true,
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
    if (state.userState === "USER") {
      try {
        const res = await axios.get(
          `${config.SERVER_URL}ticket/myticket`,
          axiosConfig
        );
        //console.log(res.data);
        if (res.status === 200) {
          console.log(res.data);
          setData(res.data);

          $(".js-mailing-list").DataTable({
            responsive: true,
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
    if (state.userState === "SUPERVISOR") {
      try {
        const res = await axios.get(
          `${config.SERVER_URL}ticket/mystaffticket`,
          axiosConfig
        );
        //console.log(res.data);
        if (res.status === 200) {
          console.log(res.data);
          setData(res.data);

          $(".js-mailing-list").DataTable({
            responsive: true,
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, []);
  //console.log(data);

  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>
                    {state.userState === "ADMIN" ? "Ticket List" : null}
                    {state.userState === "USER" ? "My Ticket List" : null}
                    {state.userState === "SUPERVISOR"
                      ? "My Staff Ticket List"
                      : null}
                  </h2>
                </div>
                <div className="body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover js-mailing-list dataTable button-demo">
                      <thead>
                        <tr>
                          <th>No Ticket</th>
                          <th>Jenis Ticket</th>
                          <th>Status</th>
                          <th>Request By</th>
                          <th>Tanggal Pengajuan</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((i) => (
                          <tr key={i.id}>
                            <td>
                              {"T" +
                                `000000${i.id}`.substring(
                                  `000000${i.id}`.length - 5
                                )}
                            </td>
                            <td>{i.jenis_ticket}</td>
                            <td>{state.statusMapping[i.status]}</td>
                            <td>{i.fullname}</td>
                            <td>{i.tanggal_pengajuan}</td>
                            <td>
                              {(i.status === 1 && state.userState === "USER") ||
                              (i.status === 1 &&
                                state.userState === "SUPERVISOR") ||
                              ((i.status === 2 || i.status === 3) &&
                                state.userState === "ADMIN") ||
                              (i.jenis_ticket === "PERBAIKAN" &&
                                state.userState === "ADMIN") ? (
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
                              ) : null}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default TicketList;
