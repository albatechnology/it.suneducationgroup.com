import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";
import TicketEditPermintaan from "./TicketEditPermintaan";
import TicketEditPeminjaman from "./TicketEditPeminjaman";
import TicketEditPerbaikanUser from "./TicketEditPerbaikanUser";
import TicketEditPerbaikanAdmin from "./TicketEditPerbaikanAdmin";

function TicketEdit({ state, dispatch }) {
  const [ticketData, setTicketData] = useState([]);
  const [title, setTitle] = useState(
    `Edit Ticket ${state.currentRow.jenis_ticket}`
  );
  const axiosConfig = AuthenticationService.getAxiosConfig();
  useEffect(async () => {
    try {
      const res = await axios.get(
        `${config.SERVER_URL}ticket/details/${state.currentId}`,
        axiosConfig
      );
      console.log("ticket Data", res.data);
      setTicketData(res.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>{title}</h2>
          </div>

          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="body">
                  {ticketData.jenis_ticket === "PERMINTAAN" ? (
                    <TicketEditPermintaan
                      state={state}
                      dispatch={dispatch}
                      ticketData={ticketData}
                      setTitle={setTitle}
                    />
                  ) : null}
                  {ticketData.jenis_ticket === "PEMINJAMAN" ? (
                    <TicketEditPeminjaman
                      state={state}
                      dispatch={dispatch}
                      ticketData={ticketData}
                      setTitle={setTitle}
                    />
                  ) : null}
                  {ticketData.jenis_ticket === "PERBAIKAN" &&
                  state.userState === "USER" ? (
                    <TicketEditPerbaikanUser
                      state={state}
                      dispatch={dispatch}
                      ticketData={ticketData}
                      setTitle={setTitle}
                    />
                  ) : null}
                  {ticketData.jenis_ticket === "PERBAIKAN" &&
                  state.userState === "ADMIN" ? (
                    <TicketEditPerbaikanAdmin
                      state={state}
                      dispatch={dispatch}
                      ticketData={ticketData}
                      setTitle={setTitle}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default TicketEdit;
